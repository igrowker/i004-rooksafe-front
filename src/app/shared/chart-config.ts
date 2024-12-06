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

export type ChartOptions = {
  series: ApexAxisChartSeries; 
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
};

export const defaultChartOptions: ChartOptions = {
  series: [
    {
      name: "candle",
      data: [] 
    }
  ],
  chart: <ApexChart>{
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
    type: "candlestick"
  },
  title: <ApexTitleSubtitle>{
    text: '',
    align: "left"
  },
  tooltip: <ApexTooltip>{
    enabled: true
  },
  xaxis: <ApexXAxis>{
    type: "datetime",
    labels: {
      show: false
    }
  },
  yaxis: <ApexYAxis>{
    opposite: true,
    crosshairs: {
      show: true,
      stroke: {
        color: '#3333ff',
        width: 2,
        dashArray: 0
      }
    },
    tooltip: {
      enabled: true
    }
  },
  plotOptions: <ApexPlotOptions>{
    candlestick: {
      colors: {
        upward: '#089981',
        downward: '#F23645'
      }
    }
  }
};