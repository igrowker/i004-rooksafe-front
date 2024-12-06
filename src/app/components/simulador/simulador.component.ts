import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { toZonedTime, format } from 'date-fns-tz';
import { SimulatorService } from 'src/app/services/simulation-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { defaultChartOptions } from '../../shared/chart-config';
import { ChartData } from '@core/models/simulator.interface';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.css'
})

export class SimuladorComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  chartOptions = { ...defaultChartOptions };
  token: any;
  title = "";
  searchText: string = '';
  selectedSymbol: string = '';
  filteredSymbols: { symbol: string; name: string }[] = [];
  asset_type: string = "crypto";
  data: any[] = [];
  balance = 0;
  balanceInput = 0;
  symbols: { symbol: string; name: string }[] = [];
  chartHasData = false;
  isLoading = true;
  isInputEnabled = false;
  isAddingFunds = false;
  operation = 0;

  constructor(private _simulatorService: SimulatorService, private _dialog: MatDialog) {
    if (typeof window !== 'undefined') {
      this.token = sessionStorage.getItem('token');
    }
  }

  ngOnInit(): void {
    this.getSymbols();
    this.getWallet();
  }

  getSymbols(): void {
    this.isLoading = true;
    if (this.token) {
      this._simulatorService.get_symbols(this.token).subscribe({
        next: (response) => {
          this.symbols = response.data;
          this.filteredSymbols = this.symbols;
          this.isLoading = false;
        },
        error: (err) => {
          console.error("Error fetching symbols:", err);
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
    }
  }

  addFunds(): void {
    if (!isNaN(this.balanceInput) || this.balanceInput > 0) {
      if (this.token) {
        this._simulatorService.add_founds(this.balanceInput, this.token).subscribe(
          response => {
            this.getWallet();
            this.toggleInputState();
            this.balanceInput = 0;
          }
        )
      }
    }
  }

  toggleInputState(): void {
    if (this.isAddingFunds) {
      this.isInputEnabled = false;
    } else {
      this.isInputEnabled = true;
    }
    this.isAddingFunds = !this.isAddingFunds;
    this.getWallet();
  }


  getWallet(): void {
    if (this.token) {
      this._simulatorService.get_wallet(this.token).subscribe({
        next: (response) => {
          this.balance = response.balance.toFixed(2);
        },
        error: (err) => {
          console.error("Error al obtener el saldo de la billetera: ", err);
        }
      });
    }
  }


  filterSymbols(): void {
    const search = this.searchText.toLowerCase();
    this.filteredSymbols = this.symbols.filter((symbol) =>
      symbol.symbol.toLowerCase().includes(search) ||
      symbol.name.toLowerCase().includes(search)
    );
  }

  onSymbolSelected(selectedSymbol: string): void {
    this.selectedSymbol = selectedSymbol;
    this.update_symbol();
  }

  update_symbol(): void {
    if (this.token && this.selectedSymbol) {
      this.isLoading = true;
      this._simulatorService.update_symbol(this.selectedSymbol, this.token).subscribe({
        next: (response) => {
          this.data = response;
          this.updateChart(response);
          this.isLoading = false;
        },
        error: (err) => {
          console.error("Error al actualizar el símbolo:", err);
          this.isLoading = false;
        }
      });
    }
  }

  updateChart(response: any): void {
    const dataArray = response.data;
    if (Array.isArray(dataArray) && dataArray.length > 0) {
      this.chartHasData = true;
      this.chartOptions.title.text = `Evolución del Símbolo : ${this.selectedSymbol}`;
      const formattedData: ChartData[] = dataArray.map((item: any) => {
        const dateInArgentina = toZonedTime(item.time, 'America/Argentina/Buenos_Aires');
        const formattedDateForX = format(dateInArgentina, 'yyyy-MM-dd HH:mm:ss');
        const formattedDateForDisplay = format(dateInArgentina, 'yyyy-MM-dd');

        return {
          x: formattedDateForX,
          y: [item.open, item.high, item.low, item.close],
          label: formattedDateForDisplay
        };
      });

      this.chartOptions.series = [
        {
          name: "candle",
          data: formattedData
        }
      ];

      this.chart?.updateOptions(this.chartOptions, true, true);
    } else {
      this.chartHasData = false;
      console.error("Datos inválidos o vacíos:", dataArray);
    }
  }

  updateAmount(change: number): void {
    this.operation = Math.max(0, this.operation + change); 
  }

  sellSymbol() {
    if (this.operation > 0 && this.balance > 0 && this.selectedSymbol) {
      this._simulatorService.sell_symbols(this.operation, this.selectedSymbol, this.token).subscribe(
        response => {
          this.getWallet();
          const rtaOperacion = {
            codope: response.transaction_id,   
            shares: response.shares_sold,      
            stock_price: response.stock_price, 
            total_cost: response.total_value,  
            symbol: this.selectedSymbol,
            tipo: "Venta"        
          };
          this.showSuccessDialog(rtaOperacion);
        },
        error => {
          console.error("Error en la venta:", error);
          this.showErrorDialog("Hubo un error al realizar la venta.");
        }
      );
    }
  }

  buySymbol() {
    if (this.operation > 0 && this.balance > 0 && this.selectedSymbol) {
      this._simulatorService.buy_symbols(this.operation, this.selectedSymbol, this.token).subscribe(
        response => {
          this.getWallet();
          const rtaOperacion = {
            codope: response.transaction_id,   
            shares: response.shares_purchased,      
            stock_price: response.stock_price, 
            total_cost: response.total_cost,  
            symbol: this.selectedSymbol,
            tipo: "Compra"        
          };
          this.showSuccessDialog(rtaOperacion);
        },
        error => {
          console.error("Error en la compra:", error);
          this.showErrorDialog("Hubo un error al realizar la compra.");
        }
      );
    }
  }

  showSuccessDialog(rtaOperacion:any) {
    this._dialog.open(DialogComponent, {
      width: '400px',
      data: {
        codope: rtaOperacion.codope,
        shares: rtaOperacion.shares,
        stock_price: rtaOperacion.stock_price,
        total_cost: rtaOperacion.total_cost,
        symbol: rtaOperacion.symbol,
        type: rtaOperacion.tipo || 'success'
      },
    });
  }

  showErrorDialog(message: string) {
    this._dialog.open(DialogComponent, {
      width: '400px',
      data: {
        message: message,
        type: 'error' 
      },
    });
  }
}