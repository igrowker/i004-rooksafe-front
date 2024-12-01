import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string =  environment.apiUrl;

  constructor(private _http: HttpClient) {
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
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.url + 'api/user/profile', { headers });
  }

  verifyToken(): Observable<boolean> {
    //FALTA validar el tipo de token enviado y el tiempo de caducidad
    const token = sessionStorage.getItem('token');
    if (!token) {
      return of(false);
    } else {
      return of(true);
    }
  }
}
