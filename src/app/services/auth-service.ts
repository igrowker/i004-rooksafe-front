import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser } from '@angular/common';
import jwt_decode from 'jwt-decode';
import { map, catchError } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string =  environment.apiUrl;
  private isBrowser: boolean;

  constructor(private _http: HttpClient,
    @Inject(PLATFORM_ID)  platformId: Object) {
      this.isBrowser = isPlatformBrowser(platformId);
  }

   getToken(): string | null {
     return this.isBrowser ? sessionStorage.getItem('token') : null;
   }

 isTokenExpired(token: string): boolean {
   if (!token) return true;
   const decoded: any = jwt_decode(token); 
   const currentTime = Math.floor(new Date().getTime() / 1000); 
   return decoded.exp < currentTime; 
 }
   refreshToken(): Observable<string | null> {
     const refreshToken = this.isBrowser ? sessionStorage.getItem('refresh_token') : null; 
     if (refreshToken) {
       return this._http.post<{ accessToken: string }>(`${this.url}api/auth/refresh`, { refreshToken }).pipe(
         map(response => {
           sessionStorage.setItem('token', response.accessToken); 
           return response.accessToken;
         }),
         catchError(() => of(null)) 
       );
     }
     return of(null);
   }

   login_usuario(email: string, password: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(
      this.url + 'api/auth/login',
      { email, password },
      { headers }
    );
  }

  register_usuario(
    email: string,
    password: string,
    name: string
  ): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(
      this.url + 'api/auth/register',
      { email, password, name },
      { headers }
    );
  }

  get_user(): Observable<any> {
    if (this.isBrowser) {
      const token = sessionStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this._http.get(this.url + 'api/user/profile', { headers });
      }
    }
    return of(null); 
  }

  isRunningInBrowser(): boolean {
    return this.isBrowser;
  }


  verifyToken(): Observable<boolean> {
    const token = this.getToken();
    if (this.isBrowser && token) {
      if (this.isTokenExpired(token)) {
        return this.refreshToken().pipe(
          map(newToken => {
            return !!newToken; 
          }),
          catchError((error) => {
            return of(false); 
          })
        );
      } else {
        return of(true); 
      }
    }
    return of(false); 
  }

}
