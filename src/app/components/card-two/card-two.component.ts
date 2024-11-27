import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-card-two',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './card-two.component.html',
  styleUrl: './card-two.component.css'
})
export class CardTwoComponent {
  @Input() title: string = '';
  @Input() image: string = '';
}
