import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.sass']
})
export class DoughnutComponent implements OnInit {

  @Input() doughnutDataColors: string[];
  @Input() doughnutChartLabels: string[] = [ 'Angular' ];
  @Input() doughnutData: number[];
  @Input() image: string = '';

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnChanges() {
    this.doughnutChartData = {
      // labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: this.doughnutData,
          backgroundColor: this.doughnutDataColors
        }
      ]
    };
  }
  
  ngOnInit(): void {
    
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
