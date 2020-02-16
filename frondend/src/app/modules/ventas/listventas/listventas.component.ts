import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Venta } from '../../modelo/ventas';

@Component({
  selector: 'app-listventas',
  templateUrl: './listventas.component.html',
  styleUrls: ['./listventas.component.css']
})
export class ListventasComponent implements OnInit {
  ventas: Venta[];
  eliman = {
    "producto_eliminar":""
  }
  total: number;
  productos =  {
    prod_nombre : '',
    "prod_precio_venta":"",
    "prod_cantidad":"",
    "prod_descripcion":"",
    "prov_nombre":"",
    "prod_stock":"",
    "prod_fecha":"",
    "clie_nombre":"",
    "nombre":""
  }
  constructor(private service: AuthService,
              private router: Router) { }

  Listar(){
    this.router.navigate(['/inicio/agregarVenta']);
  }
  
  ElimnarProducto(venta){
    localStorage.setItem("producto_eliminar",venta[1]);
    this.eliman.producto_eliminar=localStorage.getItem("producto_eliminar");
    this.service.ElimnarProducto(this.eliman.producto_eliminar)
      .subscribe(data=>{
        this.ngOnInit();
          alert("Producto descartado")        
       }
      )
      this.ngOnInit();
  }


Guardar(){
  this.service.createVentasDatos(this.productos) 
  .subscribe(
    res => {
      console.log(res)
      localStorage.removeItem("prod_nombre");
      localStorage.removeItem("prod_precio_venta");
      localStorage.removeItem("prod_stock");
      localStorage.removeItem("prod_descripcion");
      localStorage.removeItem("prov_nombre");
      //this.router.navigate(["/inicio/listarProductos"])
      this.ngOnInit();
    },
      err => console.log(err)
  )
}

Actualizar(){
  this.productos.prod_nombre=localStorage.getItem("prod_nombre");
  this.productos.prod_precio_venta=localStorage.getItem("prod_precio_venta");
  this.productos.prod_stock=localStorage.getItem("prod_stock");
  this.productos.nombre=localStorage.getItem("nombre");
} 

Elimina(){
  this.service.deleteVenta(this.productos.prod_nombre) 
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(["/inicio/agregarVenta"]);
      },
        err => console.log(err)
    )
}
Total(){
  this.total = this.ventas.reduce((
    acc,
    obj,
  ) => acc + (obj.prod_precio_venta * obj.prod_cantidad),
  0);
  console.log("Total: ", this.total)
}
  ngOnInit() {
    this.Actualizar();
    this.service.getProductosCompra() 
    .subscribe(
      data => {
        console.log(data)
        this.ventas=data;
        this.Total();
        //console.log(this.ventas[1]);
      },
        err => console.log(err)
    )
  }
}
