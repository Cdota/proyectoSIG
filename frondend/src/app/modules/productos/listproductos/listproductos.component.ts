import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Producto } from '../../modelo/productos';
import { DialogoproductosComponent } from '../dialogoproductos/dialogoproductos.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-listproductos',
  templateUrl: './listproductos.component.html',
  styleUrls: ['./listproductos.component.css']
})
export class ListproductosComponent implements OnInit {
  "nombre"
  
  usuario(){
    if(this.nombre == "admin")
     return  true;
  }
  productos:Producto[];
  constructor(private service:AuthService,
    private router:Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.nombre=localStorage.getItem("nombre");
    this.service.getProductos()
    .subscribe(data=>{
      console.log(data);
      this.productos=data;
    }
   )
 }
  
  Listar(){
    this.router.navigate(["/inicio/listarProdcutos"]);
  }

  Nuevo(){
    this.router.navigate(["/inicio/agregarProducto"]);
  }

  openDialog(productos): void {
    const dialogRef = this.dialog.open(DialogoproductosComponent, {});
    localStorage.setItem("prod_id",productos[0]);
    dialogRef.afterClosed().subscribe(result => {
    alert("Eliminado Correctamente.....!")
    localStorage.removeItem("prod_id");
    this.ngOnInit();
    console.log(result);
    });
  }

  Editar(productos){
    localStorage.setItem("prod_id",productos[0]);
    localStorage.setItem("prod_nombre",productos[1]);
    localStorage.setItem("prod_precio_venta",productos[2]);
    localStorage.setItem("prod_cantidad",productos[3]);
    localStorage.setItem("prod_descripcion",productos[4]);
    localStorage.setItem("prod_fecha",productos[5]);
    localStorage.setItem("cat_id",productos[6]);
    localStorage.setItem("prov_id",productos[7]);
    this.router.navigate(["/inicio/editarProducto"]);
  }
}

