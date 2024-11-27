import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '@shared/material/material.module';
import { AuthFormData, AuthModalData } from '../../core/models/auth-form-data.interface'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent {

  formData: AuthFormData = {
    email: '',
    password: '',
    name: undefined
  };

  isRegister: boolean = false;
  title: string = '';
  description: string = '';
  buttonText: string = 'Continuar';

 
  constructor(@Inject(MAT_DIALOG_DATA) public data: AuthModalData) {
    this.isRegister = data.isRegister;
    this.title = data.title;
    this.description = data.description;
    this.buttonText = data.buttonText;
  }

  onSubmit() {
    console.log(this.formData)
    this.formSubmit.emit(this.formData);
  }

  changeForm() {
    this.isRegister = !this.isRegister;
    if (this.isRegister) {
      this.title = 'Registro de Usuarios';
      this.description = 'Ingresa tus datos para registrarte en la plataforma.';
      this.buttonText = 'Registrarme!';
    } else {
      this.title = 'Ingreso de Usuarios';
      this.description = 'Para acceder ingresa tu correo y contraseña';
      this.buttonText = 'Continuar';
    }
  }

  @Output() formSubmit = new EventEmitter<AuthFormData>(); 
}