import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { SimulatorService } from 'src/app/services/simulation-service';
import * as XLSX from 'xlsx';
interface Operation {
  stock_symbol: string;
  shares: number;      
  sale_price?: number;            
  purchase_price?: number;        
  total: number;
  sale_date: string;
  type: 'c' | 'v';                
}
@Component({
  selector: 'app-operations-detail',
  standalone: true,
  imports: [MaterialModule, RouterLink, CommonModule],
  templateUrl: './operations-detail.component.html',
  styleUrl: './operations-detail.component.css'
})
export class OperationsDetailComponent {
  operations_details: Operation[] = [];
  displayedColumns: string[] = [
    'orderDate',
    'type',
    'status',
    'symbol',
    'cant',
    'price',
    'total',
  ];
  public dataSource: {
    orderDate: string;
    type: string;
    status: string;
    symbol: string;
    cant: number;
    price: number;
    total: number;
  }[] = [];
  token: any;
  isLoading = true;

  constructor(private _simulatorService: SimulatorService) {
    if (typeof window !== 'undefined') {
      this.token = sessionStorage.getItem('token');
    }
  }

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations() {
    this.isLoading = true;
    this._simulatorService.get_operations(this.token).subscribe(response => {
      const combinedOperations: any[] = [
        ...response.sales_history.map((op: any) => ({
          orderDate: op.sale_date || 'N/A',
          type: 'V',
          status: 'Finalizado',
          symbol: op.stock_symbol,
          cant: op.shares_sold,
          price: op.sale_price,
          total: op.total_value
        })),
        ...response.purchase_history.map((op: any) => ({
          orderDate: op.sale_date || 'N/A',
          type: 'C',
          status: 'Finalizado',
          symbol: op.stock_symbol,
          cant: op.shares_purchased,
          price: op.purchase_price,
          total: op.total_value
        }))
      ];
      this.dataSource = combinedOperations; 
      this.isLoading = false;
    });
  }

  exportToExcel(): void {
    const headers = ['Fecha orden', 'Tipo', 'Estado', 'Símbolo', 'Cantidad', 'Precio', 'Total Invertido'];
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource, {
      skipHeader: true, 
    });
    ws['!cols'] = headers.map(() => ({ wch: 20 }));
    headers.forEach((header, index) => {
      ws[XLSX.utils.encode_cell({ r: 0, c: index })] = { v: header }; 
    });

    this.dataSource.forEach((item, index) => {
      const rowIndex = index + 2; 
      const totalCellRef = `G${rowIndex}`; 

      if (!ws[totalCellRef]) ws[totalCellRef] = {};
      ws[totalCellRef].v = item.total.toFixed(2); 
      ws[totalCellRef].t = 'n'; 

      ['E', 'F'].forEach(col => {
        const cellRef = `${col}${rowIndex}`;
        if (ws[cellRef]) {
          ws[cellRef].v = parseFloat(ws[cellRef].v).toFixed(2); 
          ws[cellRef].t = 'n'; 
        }
      });

      const dateCellRef = `A${rowIndex}`; 
      if (ws[dateCellRef]) {
        const date = new Date(ws[dateCellRef].v);
        ws[dateCellRef].v = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        ws[dateCellRef].t = 's'; 
      }
    });

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Operaciones');

    XLSX.writeFile(wb, 'operaciones.xlsx');
  }
}