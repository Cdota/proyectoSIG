import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Proveedor } from '../../modelo/proveedores';

@Component({
  selector: 'app-listproveedores',
  templateUrl: './listproveedores.component.html',
  styleUrls: ['./listproveedores.component.css']
})
export class ListproveedoresComponent implements OnInit {

  proveedores:Proveedor[];
  constructor(private service:AuthService,
    private router:Router) { }

  Listar(){
    this.router.navigate(["/inicio/listarProveedores"]);
  }

  Nuevo(){
    this.router.navigate(["/inicio/agregarProveedor"]);
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
