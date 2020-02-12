import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-addproveedores',
  templateUrl: './addproveedores.component.html',
  styleUrls: ['./addproveedores.component.css']
})
export class AddproveedoresComponent implements OnInit {

  proveedores = {}
  constructor(private service:AuthService,
    private router:Router) { }

  Listar(){
      this.router.navigate(["/inicio/listarProveedores"]);
  }

  Guardar(){
    this.service.createProveedores(this.proveedores) 
    .subscribe(
      res => {
        console.log(res)
        //localStorage.setItem("token", res.token);
        alert("Registrado Correctamente.....!");
        this.router.navigate(["/inicio/listarProveedores"])
      },
        err => console.log(err)
    )
  }
  ngOnInit() {
  }

}
