import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialogoproductos',
  templateUrl: './dialogoproductos.component.html',
  styleUrls: ['./dialogoproductos.component.css']
})
export class DialogoproductosComponent implements OnInit {

  producto =  {
    "prod_id":"",
  }
  constructor(public dialogRef: MatDialogRef<DialogoproductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router:Router, private service:AuthService) { }

  ngOnInit() {
  }

  save(){
    this.producto.prod_id=localStorage.getItem("prod_id");
    this.service.deleteProducto(this.producto.prod_id)
      .subscribe(data=>{
        this.dialogRef.close()
       }
      )
  }

  cancelar(){
        this.dialogRef.close()
  }

}
