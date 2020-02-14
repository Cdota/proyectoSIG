import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editproductos',
  templateUrl: './editproductos.component.html',
  styleUrls: ['./editproductos.component.css']
})
export class EditproductosComponent implements OnInit {

  productos =  {
    "prod_id":"",
    "prod_nombre":"",
    "prod_precio_venta":"",
    "prod_cantidad":"",
    "prod_descripcion":"",
    "prov_nombre":"",
    "prod_fecha":"",
    "ing_total":"",
    "cat_id":"",
    "prov_id":""
  }
  constructor(private service:AuthService,
    private router:Router) { }

    Actualizar(){
      this.productos.prod_id=localStorage.getItem("prod_id");
      this.productos.prod_nombre=localStorage.getItem("prod_nombre");
      this.productos.prod_precio_venta=localStorage.getItem("prod_precio_venta");
      this.productos.prod_cantidad=localStorage.getItem("prod_cantidad");
      this.productos.prod_descripcion=localStorage.getItem("prod_descripcion");
      this.productos.prov_nombre=localStorage.getItem("prov_nombre");
      this.productos.prod_fecha=localStorage.getItem("prod_fecha");
      this.productos.ing_total=localStorage.getItem("ing_total");
      this.productos.cat_id=localStorage.getItem("cat_id");
      this.productos.prov_id=localStorage.getItem("prov_id");
      //console.log(this.productos.clie_num_documento);
      this.service.getProductosId(this.productos.prod_nombre)
      .subscribe(data=>{
        console.log(data);
        //this.usuario[2]=data;
      }
      )
    } 

    Guardar(){
      this.service.updateProducto(this.productos) 
      .subscribe(
        res => {
          console.log(res)
          localStorage.removeItem("prod_id");
          localStorage.removeItem("prod_nombre");
          localStorage.removeItem("prod_precio_venta");
          localStorage.removeItem("prod_cantidad");
          localStorage.removeItem("prod_descripcion");
          localStorage.removeItem("prod_fecha");
          localStorage.removeItem("cat_id");
          localStorage.removeItem("prov_id");
          alert("Actualizado Correctamente.....!")
          this.router.navigate(["/inicio/listarProductos"])
        },
          err => console.log(err)
      )
    }

  ngOnInit() {
    this.Actualizar();
  }

}
