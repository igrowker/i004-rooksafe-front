import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.verifyToken().pipe(
      map((isAuthenticated) => {
        console.log('Usuario autenticado:', isAuthenticated);
        if (isAuthenticated) {
          return true;
        } else {
          console.log('Redirigiendo al login...');
          this.router.navigate(['/onboarding']);
          return false;
        }
      }),
      catchError((error) => {
        console.error('Error en verifyToken:', error);

        this.router.navigate(['/onboarding']);
        return of(false);
      })
    );
  }
}
