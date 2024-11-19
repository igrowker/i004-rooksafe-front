import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { CardComponent } from 'src/app/components/card/card.component';
import { AuthModalComponent } from 'src/app/components/auth-modal/auth-modal.component';


@Component(
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MaterialModule, CardComponent,AuthModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
   constructor(private dialog: MatDialog) {}
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
 openLoginModal() {
    this.dialog.open(AuthModalComponent),{
      panelClass: 'custom-dialog-container',
    };
  }

}
