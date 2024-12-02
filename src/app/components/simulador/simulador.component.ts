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
  public chartHasData = false;
  public isLoading = true;
  
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
    this.isLoading = true; // Activar el spinner al inicio
    if (this.token) {
      this._simulatorService.get_symbols(this.token).subscribe({
        next: (response) => {
          this.symbols = response.data;
          this.filteredSymbols = this.symbols;
          this.isLoading = false; // Desactivar el spinner después de completar la solicitud
        },
        error: (err) => {
          console.error("Error fetching symbols:", err);
          this.isLoading = false; // Asegurar que el spinner desaparezca en caso de error
        }
      });
    } else {
      this.isLoading = false; // Manejar el caso donde no haya token
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
      this.isLoading = true; // Mostrar el cargador mientras se obtienen los datos
      this._simulatorService.update_symbol(this.selectedSymbol, this.token).subscribe({
        next: (response) => {
          this.data = response;
          this.updateChart(response); // Actualiza el gráfico con los nuevos datos
          this.isLoading = false; // Oculta el cargador al completar la solicitud
        },
        error: (err) => {
          console.error("Error al actualizar el símbolo:", err);
          this.isLoading = false; // Asegúrate de ocultar el cargador en caso de error
        }
      });
    }
  }

  updateChart(response: any): void {
    console.log("Datos para el gráfico:", response.data);
    const dataArray = response.data;
  
    // Verificar si los datos son un arreglo y si tiene elementos
    if (Array.isArray(dataArray) && dataArray.length > 0) {
      this.chartHasData = true; // El gráfico tiene datos
  
      // Formatear los datos recibidos para el gráfico
      const formattedData = dataArray.map((item: any) => {
        // Convertir la hora de UTC a la zona horaria de Argentina
        const dateInArgentina = toZonedTime(item.time, 'America/Argentina/Buenos_Aires');
        // Formatear la fecha para usar en el eje X del gráfico
        const formattedDateForX = format(dateInArgentina, 'yyyy-MM-dd HH:mm:ss');
        // Formatear la fecha para mostrar en la etiqueta
        const formattedDateForDisplay = format(dateInArgentina, 'yyyy-MM-dd');
  
        return {
          x: formattedDateForX,
          y: [item.open, item.high, item.low, item.close],
          label: formattedDateForDisplay
        };
      });
  
      // Actualizar los datos del gráfico
      this.chartOptions.series = [
        {
          name: "candle",
          data: formattedData
        }
      ];
  
      // Actualizar el gráfico con las nuevas opciones
      this.chart?.updateOptions(this.chartOptions, true, true);
    } else {
      // Si no hay datos válidos, mostrar "No Data"
      this.chartHasData = false;
      console.error("Datos inválidos o vacíos:", dataArray);
    }
  }
  
}