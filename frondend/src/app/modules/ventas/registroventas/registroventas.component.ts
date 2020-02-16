import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Venta } from '../../modelo/ventas';

@Component({
  selector: 'app-registroventas',
  templateUrl: './registroventas.component.html',
  styleUrls: ['./registroventas.component.css']
})
export class RegistroventasComponent implements OnInit {
  ventas:Venta[];
  constructor(private service:AuthService,
    private router:Router) { }

  ngOnInit() {
    this.service.getVentas()
    .subscribe(data=>{
      console.log(data);
      this.ventas=data;
    }
   )
  }

}
