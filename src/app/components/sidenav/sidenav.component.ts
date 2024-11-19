import { Component } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

}
