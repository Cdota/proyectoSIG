import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Cliente } from '../../modelo/clientes';

@Component({
  selector: 'app-editclientes',
  templateUrl: './editclientes.component.html',
  styleUrls: ['./editclientes.component.css']
})
export class EditclientesComponent implements OnInit {

  clientes =  {
    "clie_nombre":"",
    "clie_apellido":"",
    "clie_num_documento":"",
    "clie_telefono":"",
    "clie_direccion":"",
    "clie_email":"",
    "ciud_id":"",
    "doc_id":""
  }
  constructor(private service:AuthService,
    private router:Router) { }

    Actualizar(){
      this.clientes.clie_nombre=localStorage.getItem("clie_nombre");
      this.clientes.clie_apellido=localStorage.getItem("clie_apellido");
      this.clientes.clie_num_documento=localStorage.getItem("clie_num_documento");
      this.clientes.clie_telefono=localStorage.getItem("clie_telefono");
      this.clientes.clie_direccion=localStorage.getItem("clie_direccion");
      this.clientes.clie_email=localStorage.getItem("clie_email");
      this.clientes.ciud_id=localStorage.getItem("ciud_id");
      this.clientes.doc_id=localStorage.getItem("doc_id");
      console.log(this.clientes.clie_num_documento);
      this.service.getClientesId(this.clientes.clie_num_documento)
      .subscribe(data=>{
        console.log(data);
        //this.usuario[2]=data;
      }
      )
    } 

    Guardar(){
      this.service.updateClientes(this.clientes) 
      .subscribe(
        res => {
          console.log(res)
          localStorage.removeItem("clie_nombre");
          localStorage.removeItem("clie_apellido");
          localStorage.removeItem("clie_num_documento");
          localStorage.removeItem("clie_telefono");
          localStorage.removeItem("clie_direccion");
          localStorage.removeItem("clie_email");
          localStorage.removeItem("ciud_id");
          localStorage.removeItem("doc_id");
          alert("Actualizado Correctamente.....!")
          this.router.navigate(["/inicio/listarClientes"])
        },
          err => console.log(err)
      )
    }

  ngOnInit() {
    this.Actualizar();
  }

}
