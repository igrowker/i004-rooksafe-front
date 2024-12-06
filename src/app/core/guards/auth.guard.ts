import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth-service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): Observable<boolean> {
    if (isPlatformServer(this.platformId)) {
      return of(true);
    }

    if (isPlatformBrowser(this.platformId)) {
      return this.authService.verifyToken().pipe(
        switchMap((isAuthenticated) => {
          if (isAuthenticated) {
            return of(true);
          }
          return this.authService.refreshToken().pipe(
            map((newToken) => {
              if (newToken) {
                return true;
              }
              this.router.navigate(['/onboarding']);
              return false;
            }),
            catchError((error) => {
              console.error('Error al renovar el token:', error);
              this.router.navigate(['/onboarding']);
              return of(false);
            })
          );
        }),
        catchError((error) => {
          console.error('Error en verifyToken:', error);
          this.router.navigate(['/onboarding']);
          return of(false);
        })
      );
    }

    console.error('Entorno desconocido: denegando acceso.');
    return of(false);
  }
}