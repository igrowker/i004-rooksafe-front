import { Routes } from '@angular/router';
import { HomeComponent } from '@features/home/home.component';
import { ErrorComponent } from './features/error/error.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { AuthGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'investorTestComponent',
        loadComponent: () =>
          import('./components/investor-test/investor-test.component').then(
            (c) => c.InvestorTestComponent
          ),
      },
      {
        path: 'educationContent',
        loadComponent: () =>
          import(
            './components/education-content/education-content.component'
          ).then((c) => c.EducationContentComponent),
      },
      {
        path: 'fraudAlertsComponent',
        loadComponent: () =>
          import('./components/fraud-alerts/fraud-alerts.component').then(
            (c) => c.FraudAlertsComponent
          ),
      },
      {
        path: 'simulation',
        loadComponent: () =>
          import('./components/simulador/simulador.component').then(
            (c) => c.SimuladorComponent
          ),
      },
      {
        path: 'detail',
        loadComponent: () =>
          import('./components/operations-detail/operations-detail.component').then(
            (c) => c.OperationsDetailComponent
          ),
      },
    ],
  },
  { path: 'error', component: ErrorComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: '**', redirectTo: 'error' },
];
