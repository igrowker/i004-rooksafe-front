import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { CardComponent } from 'src/app/components/card/card.component';
import { RecomendationService } from 'src/app/services/recomendation.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, CardComponent, CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  completedTest: boolean = false;
  recomendationCards: any[] = [];
  constructor(private recomendationService: RecomendationService) {}

  ngOnInit(): void {
    this.getRecomendationCards();
  }
  getRecomendationCards(): void {
    this.recomendationService.getRecomendations().subscribe((cards) => {
      this.recomendationCards = cards;
    });
  }
  /*  recomendationCards = [
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
  ]; */
}
