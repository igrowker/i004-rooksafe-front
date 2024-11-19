import { Component } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {

}
