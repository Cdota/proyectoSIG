import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  "nombre"
  
  usuario(){
    if(this.nombre == "admin")
     return  true;
  }

  ngOnInit() {
    this.nombre=localStorage.getItem("nombre");
    console.log(this.nombre);
  }


  
}
