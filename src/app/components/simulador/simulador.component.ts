import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { toZonedTime, format } from 'date-fns-tz';

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
  imports: [NgApexchartsModule, MaterialModule, FormsModule, CommonModule],
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.css'
})
export class SimuladorComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;
  public token = sessionStorage.getItem('token');
  public title = "Nombre de la moneda";
  searchText: string = '';
  public investment_amount: number = 1000.00;
  selectedSymbol: string = '';
  filteredSymbols: { symbol: string; name: string }[] = [];
  public asset_type: string = "crypto";
  data: any[] = [];
  symbols: { symbol: string; name: string }[] = [];

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
  }

  niveles: Niveles[] = [
    { value: 'nivel1', viewValue: 'Nivel 1' },
    { value: 'nivel2', viewValue: 'Nivel 2' },
    { value: 'nivel3', viewValue: 'Nivel 3' },
  ];

  ngOnInit(): void {
    this.getSymbols();
    ['touchstart', 'touchmove'].forEach((eventName) => {
      document.addEventListener(
        eventName,
        () => { },
        { passive: false }
      );
    });
  }

  getSymbols(): void {
    if (this.token) {
      this._simulatorService.get_symbols(this.token).subscribe({
        next: (response) => {
          this.symbols = response.data;
          this.filteredSymbols = this.symbols;
        },
        error: (err) => {
          console.error("Error fetching symbols:", err);
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
      this._simulatorService.update_symbol(this.selectedSymbol, this.token).subscribe({
        next: (response) => {
          console.log("Response del servicio:", response); 
          this.data = response;
          this.updateChart(response); 
        },
        error: (err) => {
          console.error("Error al actualizar el símbolo:", err);
        }
      });
    }
  }


  updateChart(response: any): void {
    const dataArray = response.data;
    if (Array.isArray(dataArray)) {
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
  
      this.chart?.updateOptions(this.chartOptions); 
    } else {
      console.error("Los datos no son un arreglo:", dataArray);
    }
  }
  
}