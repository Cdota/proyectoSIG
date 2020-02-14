import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Proveedor } from '../../modelo/proveedores';
import { DialogoproveedoresComponent } from '../dialogoproveedores/dialogoproveedores.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-listproveedores',
  templateUrl: './listproveedores.component.html',
  styleUrls: ['./listproveedores.component.css']
})
export class ListproveedoresComponent implements OnInit {

  proveedores:Proveedor[];
  constructor(private service:AuthService,
    private router:Router, public dialog: MatDialog) { }

  Listar(){
    this.router.navigate(["/inicio/listarProveedores"]);
  }

  Nuevo(){
    this.router.navigate(["/inicio/agregarProveedor"]);
  }
  
  openDialog(usuarios): void {
    const dialogRef = this.dialog.open(DialogoproveedoresComponent, {});
    localStorage.setItem("prov_num_documento",usuarios[2]);
    dialogRef.afterClosed().subscribe(result => {
    alert("Eliminado Correctamente.....!")
    localStorage.removeItem("prov_num_documento");
    this.ngOnInit();
    console.log(result);
    });
  }

  Editar(proveedores){
    localStorage.setItem("prov_nombre",proveedores[1]);
    localStorage.setItem("prov_num_documento",proveedores[2]);
    localStorage.setItem("prov_telefono",proveedores[3]);
    localStorage.setItem("prov_direccion",proveedores[4]);
    localStorage.setItem("prov_email",proveedores[5]);
    localStorage.setItem("doc_id",proveedores[6]);
    localStorage.setItem("ciud_id",proveedores[7]);
    this.router.navigate(["/inicio/editarProveedor"]);
  }

  ngOnInit() {
    this.service.getProveedores()
        .subscribe(data=>{
          console.log(data);
          this.proveedores=data;
      }
      )
  }
}
