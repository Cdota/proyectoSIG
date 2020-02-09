import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usuarios:Usuario[];
  constructor(private service:AuthService,
    private router:Router)  { }

    Listar(){
      this.router.navigate(["/inicio/listar"]);
    }
  
  ngOnInit() {
    this.service.getUsuario()
    .subscribe(data=>{
      console.log(data);
      this.usuarios=data;
    }
    )
  }
}
