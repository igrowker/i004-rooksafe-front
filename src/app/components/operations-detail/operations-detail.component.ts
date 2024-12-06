import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-operations-detail',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './operations-detail.component.html',
  styleUrl: './operations-detail.component.css'
})
export class OperationsDetailComponent {
  displayedColumns: string[] = [
    'transactionNumber',
    'orderDate',
    'type',
    'status',
    'symbol',
    'cant',
    'price',
    'day',
  ];
  dataSource = [
    {
      transactionNumber: 21107575,
      orderDate: '29/11/2024',
      type: 'C',
      status: 'Finalizado',
      symbol: 'MELI',
      cant: 5,
      price: 550,
      day: "05/12/2024",
    },
  ];
}
