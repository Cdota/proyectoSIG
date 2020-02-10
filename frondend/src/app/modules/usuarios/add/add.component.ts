import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../modelo/usuario';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user = {}
  constructor(private service:AuthService,
    private router:Router) { }

  Listar(){
      this.router.navigate(["/inicio/listarUsuario"]);
  }

  Guardar(){
    this.service.createUsuario(this.user) 
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem("token", res.token);
        alert("Registrado Correctamente.....!");
        this.router.navigate(["/inicio/listarUsuario"])
      },
        err => console.log(err)
    )
  }
  ngOnInit() {
  }
}
