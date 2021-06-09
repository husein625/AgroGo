import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {
  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [29,18,4,22,10,17], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Acidobacteria', 'Actinobacteria', 'Armatimonadetes', 'Firmicutes', 'Bacteroidetes', 'Gemmatimonadetes'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}