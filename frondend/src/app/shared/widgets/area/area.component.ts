import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modules/modelo/categoria';

@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
   arr = [4, 2, 3];
  categoria :Array<Object> = [];
  constructor(private service: AuthService,
              private router: Router) { }

  obtenerDatos(){
    this.service.getCategoria().subscribe(data=>{
          console.log(data);
          this.categoria = (data);
          const cta = data;
          console.log( this.categoria);
          
      }
    )
  }

  imprimir(){
      console.log(this.categoria);
      
  }
  chartOptions: { };
  Highcharts = Highcharts;
  ngOnInit() {
    this.obtenerDatos();
    
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'DATA'
      },
      subtitle: {
          text: 'DASHBOARD'
      },
      xAxis: {
          categories: ["categoria"],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: [{
          name: 'Asia',
          data: this.arr
      }, {
          name: 'Africa',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Europe',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'America',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Oceania',
          data: [2, 2, 2, 6, 13, 30, 46]
      },]
   };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
            new Event('resize'))
      }, 350);
  }
}
