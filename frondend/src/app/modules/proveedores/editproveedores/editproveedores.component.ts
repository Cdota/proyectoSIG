import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editproveedores',
  templateUrl: './editproveedores.component.html',
  styleUrls: ['./editproveedores.component.css']
})
export class EditproveedoresComponent implements OnInit {

  proveedores =  {
    "prov_nombre":"",
    "prov_num_documento":"",
    "prov_telefono":"",
    "prov_direccion":"",
    "prov_email":"",
    "doc_id":"",
    "ciud_id":""
  }
  constructor(private service:AuthService,
    private router:Router) { }

    Actualizar(){
      this.proveedores.prov_nombre=localStorage.getItem("prov_nombre");
      this.proveedores.prov_num_documento=localStorage.getItem("prov_num_documento");
      this.proveedores.prov_telefono=localStorage.getItem("prov_telefono");
      this.proveedores.prov_direccion=localStorage.getItem("prov_direccion");
      this.proveedores.prov_email=localStorage.getItem("prov_email");
      this.proveedores.doc_id=localStorage.getItem("doc_id");
      this.proveedores.ciud_id=localStorage.getItem("ciud_id");
      console.log(this.proveedores.prov_num_documento);
      this.service.getClientesId(this.proveedores.prov_num_documento)
      .subscribe(data=>{
        console.log(data);
        //this.usuario[2]=data;
      }
      )
    } 

    Guardar(){
      this.service.updateProveedores(this.proveedores) 
      .subscribe(
        res => {
          console.log(res)
          localStorage.removeItem("prov_nombre");
          localStorage.removeItem("prov_num_documento");
          localStorage.removeItem("prov_telefono");
          localStorage.removeItem("prov_direccion");
          localStorage.removeItem("prov_email");
          localStorage.removeItem("doc_id");
          localStorage.removeItem("ciud_id");
          alert("Actualizado Correctamente.....!")
          this.router.navigate(["/inicio/listarProveedores"])
        },
          err => console.log(err)
      )
    }

  ngOnInit() {
    this.Actualizar();
  }

}
