import { Component } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { AuthService } from '../../services/auth-service';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})

export class ToolbarComponent {
  userProfile: any = null; 
  error: string | null = null;

  constructor(private _userProfileService: AuthService) {}

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
}
