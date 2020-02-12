import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-addclientes',
  templateUrl: './addclientes.component.html',
  styleUrls: ['./addclientes.component.css']
})
export class AddclientesComponent implements OnInit {

  clientes = {}
  constructor(private service:AuthService,
    private router:Router) { }

  ngOnInit() {
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
