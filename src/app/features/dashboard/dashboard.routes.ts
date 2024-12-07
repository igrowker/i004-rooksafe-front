import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InvestorTestComponent } from 'src/app/components/investor-test/investor-test.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    providers: [],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'investor',
        component: InvestorTestComponent,
      },
    ],
  },
];
