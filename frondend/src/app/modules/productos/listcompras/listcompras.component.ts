import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelo/productos';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcompras',
  templateUrl: './listcompras.component.html',
  styleUrls: ['./listcompras.component.css']
})
export class ListcomprasComponent implements OnInit {
  productos:Producto[];
  constructor(private service:AuthService,
    private router:Router) { }

  ngOnInit() {
    this.service.getCompras()
    .subscribe(data=>{
      console.log(data);
      this.productos=data;
    }
   )
  }
}
