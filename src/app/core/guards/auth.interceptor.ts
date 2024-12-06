import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth-service'; 

export function AuthInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
  const authService = inject(AuthService);  
  
  return authService.verifyToken().pipe(
    switchMap((isValid) => {
      if (isValid) {
        const token = authService.getToken();
        if (token) {
          req = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
          });
        }
      }
      return next(req); 
    })
  );
}