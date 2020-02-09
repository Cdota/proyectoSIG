import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() togleSideBarForm: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  togleSideBar(){
    this.togleSideBarForm.emit();
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/signin"])
   }
}
