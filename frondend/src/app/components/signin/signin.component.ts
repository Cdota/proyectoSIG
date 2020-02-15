import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    "usu_nombre":""
  }
  "nombre"

  constructor(private authservices: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  signIn() {
    this.authservices.signIn(this.user) 
  .subscribe(
    res => {
      console.log(this.user.usu_nombre)
      localStorage.setItem("nombre",this.user.usu_nombre);
      this.nombre=localStorage.getItem("nombre");
        localStorage.setItem("token", res.token);
        if(this.nombre == "Carlos") return this.router.navigate(["/inicio/dashboard"])
        this.router.navigate(["/inicio/"])
    },
      err => console.log(err)
    )  
  }
}
