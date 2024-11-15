import {Component} from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
