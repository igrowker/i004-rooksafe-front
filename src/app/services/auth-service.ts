import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser } from '@angular/common';

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
    return of(null); // Retorna un observable vacío en caso de no ser el navegador
  }

  verifyToken(): Observable<boolean> {
    if (this.isBrowser) {
      const token = sessionStorage.getItem('token');
      return of(!!token); // Devuelve true si existe un token
    } else {
      console.warn('Intento de verificar token en SSR.');
      return of(false);
    }
  }

  isRunningInBrowser(): boolean {
    return this.isBrowser;
  }
}
