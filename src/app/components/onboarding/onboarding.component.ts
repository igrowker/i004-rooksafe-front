import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '@shared/material/material.module';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [MaterialModule, AuthModalComponent],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent {
  constructor(private dialog: MatDialog) {}

  openLoginModal() {
    this.dialog.open(AuthModalComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        isRegister: false,   
        title: 'Ingreso de Usuarios',
        description: 'Para acceder ingresa tu correo y contraseña',
        buttonText: 'Continuar'
      }
    });
  }

  openRegisterModal() {
    this.dialog.open(AuthModalComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        isRegister: true,   
        title: 'Registro de Usuarios',
        description: 'Ingresa tus datos para registrarte en la plataforma.',
        buttonText: 'Registrarme!'
      }
    });
  }
}