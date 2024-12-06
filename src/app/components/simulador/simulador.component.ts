import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { toZonedTime, format } from 'date-fns-tz';
import { WebSocketSubject } from 'rxjs/webSocket';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexPlotOptions
} from "ng-apexcharts";
import { SimulatorService } from 'src/app/services/simulation-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
};

interface Niveles {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule, FormsModule, CommonModule, MatSelectModule, RouterLink ],
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.css'
})
export class SimuladorComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  chartOptions: Partial<ChartOptions>;
  token:any;
  title = "Nombre de la moneda";
  searchText: string = '';
  previousBalanceInput: number = 0;
  investment_amount: number = 1000.00;
  selectedSymbol: string = '';
  filteredSymbols: { symbol: string; name: string }[] = [];
  asset_type: string = "crypto";
  data: any[] = [];
  balance = 0;
  balanceInput = 0;
  simulations = []
  transactions = []
  symbols: { symbol: string; name: string }[] = [];
  chartHasData = false;
  isLoading = true;
  isInputEnabled = false;
  isAddingFunds = false;
  operation = 0;

  constructor(private _simulatorService: SimulatorService) {
    this.chartOptions = {
      series: [
        {
          name: "candle",
          data: []
        }
      ],
      chart: {
        toolbar: {
          tools: {
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
            download: false
          }
        },
        height: 350,
        animations: {
          enabled: false
        },
        type: "candlestick",
      },
      title: {
        text: this.selectedSymbol,
        align: "left"
      },
      tooltip: {
        enabled: true,
      },
      xaxis: {
        type: "datetime",
        labels: {
          show: false
        },
      },
      yaxis: {
        opposite: true,
        crosshairs: {
          show: true,
          stroke: {
            color: '#3333ff',
            width: 2,
            dashArray: 0,
          },
        },
        tooltip: {
          enabled: true,
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#089981',
            downward: '#F23645'
          }
        }
      },
    };
    if (typeof window !== 'undefined') {  
      this.token = sessionStorage.getItem('token');
    }
    
  }

  niveles: Niveles[] = [
    { value: 'nivel1', viewValue: 'Nivel 1' },
    { value: 'nivel2', viewValue: 'Nivel 2' },
    { value: 'nivel3', viewValue: 'Nivel 3' },
  ];

  ngOnInit(): void {
    this.getSymbols();
    this.getWallet();
    ['touchstart', 'touchmove'].forEach((eventName) => {

    });
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

  enableInput(): void {
    this.isInputEnabled = true;
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
          console.error("Error fetching wallet balance:", err);
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

      const formattedData = dataArray.map((item: any) => {
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

  addAmount() {
      this.operation = this.operation + 1;
  }
  removeAmount() {
    if ((this.operation -1 ) >= 0 )
      this.operation = this.operation - 1;
  }

  sellSymbol() {
    if (this.operation > 0 && this.balance > 0 && this.selectedSymbol) {
      this._simulatorService.sell_symbols(this.operation, this.selectedSymbol, this.token).subscribe(
        response => {
          this.getWallet();
        })
    }
  }

  buySymbol() {
    if (this.operation > 0 && this.balance > 0 && this.selectedSymbol)
      this._simulatorService.buy_symbols(this.operation, this.selectedSymbol, this.token).subscribe(
        response => {
          this.getWallet();
        })

  }

}