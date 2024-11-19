import { Component, Input } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-test-progress',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './test-progress.component.html',
  styleUrl: './test-progress.component.css',
})
export class TestProgressComponent {
  @Input() currentStep: number = 0;
  @Input() totalSteps: number = 1;
  get progress(): number {
    return this.totalSteps > 0 ? (this.currentStep / this.totalSteps) * 100 : 0;
  }
}
