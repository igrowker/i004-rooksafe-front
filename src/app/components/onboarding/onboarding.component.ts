import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '@shared/material/material.module';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [MaterialModule,AuthModalComponent],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {
  constructor(private dialog: MatDialog) {}

  openLoginModal() {
    this.dialog.open(AuthModalComponent),{
      panelClass: 'custom-dialog-container',
    };
  }
}
