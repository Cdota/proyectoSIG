import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usuarios:Usuario[];
  constructor(private service:AuthService,
    private router:Router)  { }

    Listar(){
      this.router.navigate(["/inicio/listarUsuario"]);
    }
    Nuevo(){
      this.router.navigate(["/inicio/agregarUsuario"]);
    }

    Editar(usuarios){
      localStorage.setItem("usu_nombre",usuarios[1]);
      localStorage.setItem("usu_apellido",usuarios[2]);
      localStorage.setItem("usu_password",usuarios[3]);
      localStorage.setItem("usu_num_documento",usuarios[4]);
      localStorage.setItem("usu_telefono",usuarios[5]);
      localStorage.setItem("usu_direccion",usuarios[6]);
      localStorage.setItem("usu_email",usuarios[7]);
      localStorage.setItem("rol_id",usuarios[8]);
      localStorage.setItem("ciud_id",usuarios[9]);
      localStorage.setItem("doc_id",usuarios[10]);
      this.router.navigate(["/inicio/editarUsuario"]);
    }

    ngOnInit() {
      this.service.getUsuario()
      .subscribe(data=>{
        console.log(data);
        this.usuarios=data;
      }
      )
  }
}
