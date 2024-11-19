import { Component, Input } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
}
