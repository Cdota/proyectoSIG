import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Ciudad } from '../../modelo/ciudad';
import { Rol } from '../../modelo/rol';
import { Documento } from '../../modelo/documento';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user = {}
  ciudad:Ciudad[];
  roles: Rol[]
  documentos: Documento[]
  constructor(private service:AuthService,
    private router:Router) { }

  Listar(){
      this.router.navigate(["/inicio/listarUsuario"]);
  }

  Guardar(){
    this.service.createUsuario(this.user) 
    .subscribe(
      res => {
        console.log(res)
        //localStorage.setItem("token", res.token);
        alert("Registrado Correctamente.....!");
        this.router.navigate(["/inicio/listarUsuario"])
      },
        err => console.log(err)
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

  ObtenerRol(){
    this.service.getRol()
    .subscribe(data=>{
      console.log(data);
      this.roles=data;
     }
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


  ngOnInit() {
    this.ObtenerCiudad();
    this.ObtenerRol();
    this.ObtenerDocumento();
  }
}
