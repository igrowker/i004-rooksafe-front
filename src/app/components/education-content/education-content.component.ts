import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { CardComponent } from 'src/app/components/card/card.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
@Component({
  selector: 'app-education-content',
  standalone: true,
  imports: [MaterialModule, CardComponent, CommonModule, RouterModule, HeroComponent],
  templateUrl: './education-content.component.html',
  styleUrl: './education-content.component.css'
})
export class EducationContentComponent {
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

