import { Component } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { AuthService } from '../../services/auth-service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialModule,MatButtonModule, MatMenuModule, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})


export class ToolbarComponent {
  userProfile: any = null; 
  error: string | null = null;

  constructor(private _userProfileService: AuthService, private _router: Router, private _authService:AuthService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this._userProfileService.get_user().subscribe(
      (response) => {
        this.userProfile = response;
        if (this._authService.isRunningInBrowser()) {
           sessionStorage.setItem('usr', JSON.stringify(response));
        }
      },
      (error) => {
        console.error("Error al obtener el perfil del usuario:", error);
      }
    );
  }

  logout() {
    sessionStorage.clear();  
    this._router.navigate(['/onboarding']);  
  }
}
