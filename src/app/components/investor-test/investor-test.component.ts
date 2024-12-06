import { Component } from '@angular/core';
import {
  QuestionnairesComponent,
  TestArray,
} from '../questionnaires/questionnaires.component';
import { MaterialModule } from '@shared/material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InvestorTestService } from 'src/app/services/investorTest.service';
import { MatDialog } from '@angular/material/dialog';
import { ResponseDialogComponent } from '../response-dialog/response-dialog.component';
import { response } from 'express';

@Component({
  selector: 'app-investor-test',
  standalone: true,
  imports: [QuestionnairesComponent, MaterialModule],
  templateUrl: './investor-test.component.html',
  styleUrl: './investor-test.component.css',
})
export class InvestorTestComponent {
  title;
  paragraph;
  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
    private investorTestService: InvestorTestService
  ) {
    this.title = 'Test del Inversor';
    this.paragraph = 'Conócete como inversor';
  }

  questions: TestArray[] = [
    {
      question: '¿En cuáles de estos instrumentos has invertido alguna vez?',
      options: ['Plazo Fijo', 'Fondos Comunes de Inversión', 'Bonos'],
    },
    {
      question:
        '¿Cuál es el plazo máximo que estarías dispuesto a mantener tus inversiones?',
      options: ['Menos de 1 año', 'Entre 1 y 5 años', 'Más de 5 años'],
    },
    {
      question: '¿Cuántos años tenés?',
      options: ['Menos de 30 años', 'Entre 30 y 40 años', 'Más de 40 años'],
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
    console.log('respuestas del investor', answers);
    this.investorTestService.send_test({ respuestas: answers }).subscribe({
      next: (response) => {
        console.log('respuesta del server', response);

        const dialogRef = this.dialog.open(ResponseDialogComponent, {
          width: '500px',
          height: 'auto',
          data: response,
        });
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['home/educationContent']);
        });
        /*  this._snackBar.open(
          `Cuestionario completado. Respuestas: ${answers}`,
          'Cerrar',
          { duration: 3000, verticalPosition: 'top' }
        ); */
      },
      error: (error) => {
        console.error('Error al enviar respuestas al servidor:', error);
        this._snackBar.open(
          'Error al completar el formulario. Intenta nuevamente o comuníquese con Atención al cliente',
          'Cerrar',
          { duration: 3000, verticalPosition: 'top' }
        );
      },
    });
    this.router.navigate(['/home/dashboard']);
  }
}
