import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecomendationService {
  constructor() {}
  //aqui van las supuestas recomendaciones segun el perfil
  getRecomendations(): Observable<any[]> {
    const recomendationCards = [
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
    return of(recomendationCards);
  }
}
