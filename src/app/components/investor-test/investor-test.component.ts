import { Component } from '@angular/core';
import {
  QuestionnairesComponent,
  TestArray,
} from '../questionnaires/questionnaires.component';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-investor-test',
  standalone: true,
  imports: [QuestionnairesComponent, MaterialModule],
  templateUrl: './investor-test.component.html',
  styleUrl: './investor-test.component.css',
})
export class InvestorTestComponent {
  questions: TestArray[] = [
    {
      question: '¿En cuáles de estos instrumentos has invertido alguna vez?',
      options: [
        'Plazo Fijo',
        'Fondos Comunes de Inversión',
        'Bonos',
        'Opciones',
        'Futuros',
      ],
    },
    {
      question:
        '¿Cuál es el plazo máximo que estarías dispuesto a mantener tus inversiones?',
      options: ['Menos de 1 año', 'Entre 1 y 5 años', 'Más de 5 años'],
    },
    {
      question: '¿Cuántos años tenés?',
      options: [
        'Menos de 30 años',
        'Entre 40 y 40 años',
        'Entre 41 y 51 años',
        'Más de 50 años',
      ],
    },
    {
      question: 'Al momento de realizar una inversión, buscas:',
      options: [
        'Cubrir tu capital de la inflación y/o devaluación buscando el menor riesgo posible',
        'Obtener un rendimiento a la inflación y/o devaluación aceptando arriesgar tu capital',
        'Lograr un rendimiento considerablemente superior a la inflación y/o devaluación aceptando posibles pérdidas de capital.',
      ],
    },
  ];
  onTestCompleted(answers: number[]) {
    console.log('Respuestas seleccionadas:', answers);
    alert(`Cuestionario completado. Respuestas: ${answers}`);
  }
}
