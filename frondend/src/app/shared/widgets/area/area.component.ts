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
          text: 'Categoria de productos'
      },
      subtitle: {
          text: null
      },
      xAxis: {
          categories: ["Blancos", "Semigrasos", "Azules", "Crustáceos", "Moluscos"],
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
          name: 'Blancos',
          data: this.arr
      }, {
          name: 'Semigrasos',
          data: [50, 100, 90, 20, 120]
      }, {
          name: 'Azules',
          data: [20, 50,150, 20, 55]
      }, {
          name: 'Crustáceos',
          data: [30, 20, 80, 100, 25]
      }, {
          name: 'Moluscos',
          data: [55, 22, 77, 44, 88]
      },]
   };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
            new Event('resize'))
      }, 350);
  }
}
