import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Producto } from '../../modelo/productos';

@Component({
  selector: 'app-listproductos',
  templateUrl: './listproductos.component.html',
  styleUrls: ['./listproductos.component.css']
})
export class ListproductosComponent implements OnInit {
  productos:Producto[];
  constructor(private service:AuthService,
    private router:Router) { }

  ngOnInit() {
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
}
