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
      //if(this.user.usu_nombre=="Carlos"){
        localStorage.setItem("token", res.token);
        this.router.navigate(["/inicio/dashboard"])
      //}else{
        //console.log("Hola");
        
     // }
    },
      err => console.log(err)
    )  
  }
}
