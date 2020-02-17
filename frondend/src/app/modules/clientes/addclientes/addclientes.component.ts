import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Ciudad } from '../../modelo/ciudad';
import { Documento } from '../../modelo/documento';

@Component({
  selector: 'app-addclientes',
  templateUrl: './addclientes.component.html',
  styleUrls: ['./addclientes.component.css']
})
export class AddclientesComponent implements OnInit {
  ciudad:Ciudad[];
  documentos: Documento[]
  clientes = {}
  constructor(private service:AuthService,
    private router:Router) { }

    ObtenerCiudad(){
      this.service.getCiudad()
      .subscribe(data=>{
        console.log(data);
        this.ciudad=data;
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
    this.ObtenerDocumento();
  }

  Listar(){
    this.router.navigate(["/inicio/listarClientes"]);
  }

  Guardar(){
    this.service.createClientes(this.clientes) 
    .subscribe(
      res => {
        console.log(res)
        //localStorage.setItem("token", res.token);
        alert("Registrado Correctamente.....!");
        this.router.navigate(["/inicio/listarClientes"])
      },
        err => console.log(err)
    )
  }
}
