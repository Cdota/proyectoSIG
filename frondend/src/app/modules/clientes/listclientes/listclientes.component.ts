import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Cliente } from '../../modelo/clientes';
import { DialogoclientesComponent } from '../dialogoclientes/dialogoclientes.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-listclientes',
  templateUrl: './listclientes.component.html',
  styleUrls: ['./listclientes.component.css']
})
export class ListclientesComponent implements OnInit {
 
  clientes:Cliente[];
  constructor(private service:AuthService,
    private router:Router, public dialog: MatDialog) { }

    Listar(){
      this.router.navigate(["/inicio/listarClientes"]);
    }
    Nuevo(){
      this.router.navigate(["/inicio/agregarClientes"]);
    }

    openDialog(productos): void {
      const dialogRef = this.dialog.open(DialogoclientesComponent, {});
      localStorage.setItem("clie_num_documento",productos[3]);
      dialogRef.afterClosed().subscribe(result => {
      alert("Eliminado Correctamente.....!")
      localStorage.removeItem("clie_num_documento");
      this.ngOnInit();
      console.log(result);
      });
    }

    Editar(clientes){
      localStorage.setItem("clie_nombre",clientes[1]);
      localStorage.setItem("clie_apellido",clientes[2]);
      localStorage.setItem("clie_num_documento",clientes[3]);
      localStorage.setItem("clie_telefono",clientes[4]);
      localStorage.setItem("clie_direccion",clientes[5]);
      localStorage.setItem("clie_email",clientes[6]);
      localStorage.setItem("ciud_id",clientes[7]);
      localStorage.setItem("doc_id",clientes[8]);
      this.router.navigate(["/inicio/editarClientes"]);
    }

    ngOnInit() {
      this.service.getClientes()
        .subscribe(data=>{
          console.log(data);
          this.clientes=data;
      }
      )
  }
}
