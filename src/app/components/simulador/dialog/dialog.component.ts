import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'] 
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: { 
      codope: string; 
      symbol: string; 
      stock_price: number; 
      shares: number; 
      total_cost: number; 
      type:string;
    }
  ) {}

  get codope(): string {
    return this.data.codope;
  }

  get symbol(): string {
    return this.data.symbol;
  }

  get stock_price(): number {
    return this.data.stock_price;
  }

  get shares(): number {
    return this.data.shares;
  }

  get total_cost(): number {
    return this.data.total_cost;
  }

  get type(): string {
    return this.data.type;
  }
}