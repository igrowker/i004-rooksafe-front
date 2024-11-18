import { Component, Input } from '@angular/core';

import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [MatButton],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
@Input() img: string = "/src/app/assets/images/login/Group.png";
}
