import { Component } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { AuthService } from '../../services/auth-service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialModule,MatButtonModule, MatMenuModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})


export class ToolbarComponent {
  userProfile: any = null; 
  error: string | null = null;

  constructor(private _userProfileService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this._userProfileService.get_user().subscribe(
      (response) => {
        this.userProfile = response;
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
