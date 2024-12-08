import { Component, OnInit } from '@angular/core';
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
import { AuthService } from 'src/app/services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investor-test',
  standalone: true,
  imports: [QuestionnairesComponent, MaterialModule, CommonModule],
  templateUrl: './investor-test.component.html',
  styleUrl: './investor-test.component.css',
})
export class InvestorTestComponent implements OnInit {
  title;
  paragraph;
  userProfile: any;
  isLoading: boolean = true;
  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
    private investorTestService: InvestorTestService,
    private _authService: AuthService
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
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
  onTestCompleted(answers: number[]) {
    this.investorTestService.send_test({ respuestas: answers }).subscribe({
      next: (response) => {
        const dialogRef = this.dialog.open(ResponseDialogComponent, {
          data: response,
        });
        sessionStorage.setItem('testCompleted', 'true');
        this.loadUserProfile();
        this.isLoading = false;
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['home/educationContent']);
        });
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

  loadUserProfile(): void {
    this._authService.get_user().subscribe(
      (response) => {
        this.userProfile = response;
        if (this._authService.isRunningInBrowser()) {
          sessionStorage.setItem('usr', JSON.stringify(response));
        }
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    );
  }
}
