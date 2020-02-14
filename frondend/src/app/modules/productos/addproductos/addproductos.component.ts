import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-addproductos',
  templateUrl: './addproductos.component.html',
  styleUrls: ['./addproductos.component.css']
})
export class AddproductosComponent implements OnInit {

  productos = {
    "usuario":"",
  }
  
  constructor(private service:AuthService,
    private router:Router) { }

  Listar(){
      this.router.navigate(["/inicio/listarProductos"]);
  }

  Guardar(){
    this.service.createProductos(this.productos)
    .subscribe(
      res => {
        console.log(res)
        //localStorage.setItem("token", res.token);
        alert("Registrado Correctamente.....!");
        localStorage.removeItem("nombre");
        this.router.navigate(["/inicio/listarProductos"])
      },
        err => console.log(err)
    )
  }

  ngOnInit() {
    this.productos.usuario=localStorage.getItem("nombre");
  }
}
