import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Ciudad } from '../../modelo/ciudad';
import { Documento } from '../../modelo/documento';

@Component({
  selector: 'app-addproveedores',
  templateUrl: './addproveedores.component.html',
  styleUrls: ['./addproveedores.component.css']
})
export class AddproveedoresComponent implements OnInit {
  ciudad:Ciudad[];
  documentos: Documento[]
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
  ObtenerDocumento(){
    this.service.getDocumento()
    .subscribe(data=>{
      console.log(data);
      this.documentos=data;
     }
    )
  }

  ObtenerCiudad(){
    this.service.getCiudad()
    .subscribe(data=>{
      console.log(data);
      this.ciudad=data;
     }
    )
  }
  ngOnInit() {
    this.ObtenerCiudad();
    this.ObtenerDocumento();
  }

}
