import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '@shared/material/material.module';
import { AuthModalComponent } from 'src/app/components/auth-modal/auth-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule,AuthModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  openLoginModal() {
    this.dialog.open(AuthModalComponent),{
      panelClass: 'custom-dialog-container',
    };
  }
}
