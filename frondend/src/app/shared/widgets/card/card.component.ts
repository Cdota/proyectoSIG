import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modules/modelo/clientes';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  @Input() label:string;
  @Input() total:string;
  @Input() percentage:string;
  clientes:Cliente[];
  Highcharts = Highcharts;
  constructor(private service:AuthService,
    private router:Router) { }
  chartOptions = {
  }

  consulatar(){
    this.service.getClientes()
    .subscribe(data=>{
      console.log(data);
      this.clientes=data;
      this.clientes.length;
      var totales = this.clientes.length;
      console.log(totales); 
     }
   )
  }

  dasboar(){
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
          data: [24, 54, 5, 10]
      }]
   };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
            new Event('resize'))
      }, 350);
  }

  ngOnInit() {
    this.consulatar();
    this.dasboar();
}
}