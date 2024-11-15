import { Routes } from '@angular/router';
import { HomeComponent } from '@features/home/home.component';
import { ErrorComponent } from './features/error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: 'error' }
];
