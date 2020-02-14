import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user =  {
    "usu_nombre":"",
    "usu_apellido":"",
    "usu_password":"",
    "usu_num_documento":"",
    "usu_telefono":"",
    "usu_direccion":"",
    "usu_email":"",
    "rol_id":"",
    "ciud_id":"",
    "doc_id":""
  }
  usuario :Usuario= new Usuario();
  constructor(private service:AuthService,
    private router:Router) { }
 
  Listar(){
    this.router.navigate(["/inicio/listarUsuario"]);
  }

  Actualizar(){
    this.user.usu_nombre=localStorage.getItem("usu_nombre");
    this.user.usu_apellido=localStorage.getItem("usu_apellido");
    this.user.usu_password=localStorage.getItem("usu_password");
    this.user.usu_num_documento=localStorage.getItem("usu_num_documento");
    this.user.usu_telefono=localStorage.getItem("usu_telefono");
    this.user.usu_direccion=localStorage.getItem("usu_direccion");
    this.user.usu_email=localStorage.getItem("usu_email");
    this.user.rol_id=localStorage.getItem("rol_id");
    this.user.ciud_id=localStorage.getItem("ciud_id");
    this.user.doc_id=localStorage.getItem("doc_id");
    console.log(this.user.usu_num_documento);
    this.service.getUsuarioId(this.user.usu_num_documento)
    .subscribe(data=>{
      console.log(data);
      //this.usuario[2]=data;
    }
    )
  } 
   
  Guardar(){
    this.service.updateUsuario(this.user) 
    .subscribe(
      res => {
        console.log(res)
        localStorage.removeItem("usu_nombre");
        localStorage.removeItem("usu_apellido");
        localStorage.removeItem("usu_password");
        localStorage.removeItem("usu_num_documento");
        localStorage.removeItem("usu_telefono");
        localStorage.removeItem("usu_direccion");
        localStorage.removeItem("usu_email");
        localStorage.removeItem("rol_id");
        localStorage.removeItem("ciud_id");
        localStorage.removeItem("doc_id");
        alert("Actualizado Correctamente.....!")
        this.router.navigate(["/inicio/listarUsuario"])
      },
        err => console.log(err)
    )
  }

  ngOnInit() {
    this.Actualizar();
  }
}
