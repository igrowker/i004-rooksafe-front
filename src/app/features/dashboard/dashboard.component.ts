import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, CardComponent, CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  completedTest: boolean = false;
  ngOnInit(): void {
    //aca iría lógica según venga del back
  }
  recomendationCards = [
    {
      title: '¿Es seguro depositar dinero en apps online?',
      image: 'assets/images/recomendationCard-1.png',
    },
    {
      title: '¿De qué se trata un plazo fijo?',
      image: 'assets/images/recomendationCard-2.png',
    },
    {
      title: 'Recomendaciones de seguridad.',
      image: 'assets/images/recomendationCard-3.png',
    },
  ];
}
