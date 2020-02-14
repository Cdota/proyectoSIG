import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../modelo/usuario';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usuarios:Usuario[];
  constructor(private service:AuthService,
    private router:Router, public dialog: MatDialog)  { }
    user =  {
      "usu_num_documento":"",
    }

    Listar(){
      this.router.navigate(["/inicio/listarUsuario"]);
    }

    Nuevo(){
      this.router.navigate(["/inicio/agregarUsuario"]);
    }

    openDialog(usuarios): void {
      const dialogRef = this.dialog.open(DialogoComponent, {});
      localStorage.setItem("usu_num_documento",usuarios[4]);
      dialogRef.afterClosed().subscribe(result => {
      alert("Eliminado Correctamente.....!")
      localStorage.removeItem("usu_num_documento");
      this.ngOnInit();
      console.log(result);
      });
    }

    Eliminar(usuarios){
      localStorage.setItem("usu_num_documento",usuarios[4]);
      this.user.usu_num_documento=localStorage.getItem("usu_num_documento");
      console.log(this.user.usu_num_documento);
      this.service.deleteUsuario(this.user.usu_num_documento)
      .subscribe(data=>{
        this.ngOnInit();
        alert("Eliminado Correctamente.....!")
       }
      )
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

    public ngOnInit() {
      this.service.getUsuario()
      .subscribe(data=>{
        console.log(data);
        this.usuarios=data;
      }
      )
  }
}
