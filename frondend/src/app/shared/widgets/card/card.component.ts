import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  @Input() label:string;
  @Input() total:string;
  @Input() percentage:string;

  Highcharts = Highcharts;
  constructor() { }

  chartOptions = {

  }
  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height: 60
      },
      title: {
          text: null,
      },
      subtitle: {
          text: null,
      },
      tooltip: {
        split: true,
        outside: true,
      },
      legend:{
        enabled: false,
      },
      credits: {
        enabled: null,
      },
      exporting: {
        enabled: false,
      },
      xAxis:{
        labels:{
          enabled: false,
        },
        title:{
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis:{
        labels:{
          enabled: false,
        },
        title:{
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
          data: [24, 54, 58]
      }]
   };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
            new Event('resize'))
      }, 350);
  }
}
