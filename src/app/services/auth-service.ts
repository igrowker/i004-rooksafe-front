import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser } from '@angular/common';
import jwt_decode from 'jwt-decode'; // Usar el import con *
import { map, catchError } from 'rxjs/operators'; // Importa los operadores de RxJS


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


//possible changes

//   // Función para obtener el token de acceso (puede estar en sessionStorage o localStorage)
//   getToken(): string | null {
//     return this.isBrowser ? sessionStorage.getItem('token') : null;
//   }
//   // Función para verificar si el token ha expirado
// isTokenExpired(token: string): boolean {
//   if (!token) return true;
//   const decoded: any = jwt_decode(token); // Ahora funciona correctamente
//   const currentTime = Math.floor(new Date().getTime() / 1000); // Obtener el tiempo actual en segundos
//   return decoded.exp < currentTime; // Verificar si el token está expirado
// }
//   // Función para renovar el token (debe ser implementada en el backend)
//   refreshToken(): Observable<string | null> {
//     const refreshToken = this.isBrowser ? sessionStorage.getItem('refresh_token') : null; // Obtener refresh token
//     if (refreshToken) {
//       return this._http.post<{ accessToken: string }>(`${this.url}api/auth/refresh`, { refreshToken }).pipe(
//         map(response => {
//           sessionStorage.setItem('token', response.accessToken); // Guardar el nuevo token
//           return response.accessToken;
//         }),
//         catchError(() => of(null)) // Si falla la renovación, regresamos null
//       );
//     }
//     return of(null);
//   }



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

  //possible changes

  // // Función para verificar el token
  // verifyToken(): Observable<boolean> {
  //   const token = this.getToken();
  //   if (this.isBrowser && token) {
  //     // Verifica si el token ha caducado
  //     if (this.isTokenExpired(token)) {
  //       // Si está expirado, intenta renovar el token
  //       return this.refreshToken().pipe(
  //         map(newToken => !!newToken), // Si se renueva correctamente, regresa 'true'
  //         catchError(() => of(false)) // Si falla la renovación, regresa 'false'
  //       );
  //     } else {
  //       return of(true); // Si el token no ha expirado, regresa 'true'
  //     }
  //   }
  //   return of(false); // Si no hay token, regresa 'false'
  // }

  // // Función para verificar si está corriendo en un navegador
  // isRunningInBrowser(): boolean {
  //   return this.isBrowser;
  // }

}
