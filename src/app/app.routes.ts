import { Routes } from '@angular/router';
import { HomeComponent } from '@features/home/home.component';
import { ErrorComponent } from './features/error/error.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { DashboardComponent } from '@features/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'error' },
];
