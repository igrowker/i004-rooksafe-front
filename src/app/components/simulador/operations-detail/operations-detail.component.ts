import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { SimulatorService } from 'src/app/services/simulation-service';

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
    },
  ];
  token: any;

  constructor(private _simulatorService: SimulatorService) {
    if (typeof window !== 'undefined') {
      this.token = sessionStorage.getItem('token');
    }
  }

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations(){
    this._simulatorService.get_operations(this.token).subscribe(
      response=>{
        console.log(response)
      }
    )
  }
}
