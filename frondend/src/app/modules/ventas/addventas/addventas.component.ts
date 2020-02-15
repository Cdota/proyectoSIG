import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Producto } from '../../modelo/productos';
import { Venta } from '../../modelo/ventas';

@Component({
  selector: 'app-addventas',
  templateUrl: './addventas.component.html',
  styleUrls: ['./addventas.component.css']
})
export class AddventasComponent implements OnInit {
  cantidad:String;
  ventas:Venta[];
  constructor(private service:AuthService,
    private router:Router) { }

  Listar(){
      this.router.navigate(["/inicio/agregarVentas"]);
  }
 //<input type='number' class='form-control' name= "cantidad" name='cantidad'  autocomplete='off' min='0' max="{{venta[4]}}" 
  Enviar(ventas){
    console.log(this.cantidad);
    //localStorage.setItem("clie_nombre",ventas[0]);
    localStorage.setItem("prod_nombre",ventas[0]);
    localStorage.setItem("prod_precio_venta",ventas[2]);
    localStorage.setItem("prod_stock",ventas[3]);
    this.router.navigate(["/inicio/listarVentas"])
  }

  ngOnInit() {
    this.service.getProductosVentas()
    .subscribe(data=>{
      console.log(data);
      this.ventas=data;
    }
   )
  }
}
