import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent {

}
