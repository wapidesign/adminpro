import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html'
})
export class GraficaDonaComponent implements OnInit {

  @Input('ChartLabels') doughnutChartLabels: string[] = [];
  @Input('ChartData') doughnutChartData: number[] = [];
  @Input('ChartType') doughnutChartType: string = '';


  constructor() { }

  ngOnInit() {
  }

}
