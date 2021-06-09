import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from './graphs.component';
import { ChartSimpleModule, ChartsModule, WavesModule } from 'ng-uikit-pro-standard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';



@NgModule({
  declarations: [GraphsComponent, LineChartComponent, RadarChartComponent, BarChartComponent, PolarAreaChartComponent],
  imports: [
    CommonModule,
    ChartsModule,
    WavesModule,
    ChartSimpleModule,
    FlexLayoutModule
  ]
})
export class GraphsModule { }
