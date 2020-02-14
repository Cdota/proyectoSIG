import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialogoproveedores',
  templateUrl: './dialogoproveedores.component.html',
  styleUrls: ['./dialogoproveedores.component.css']
})
export class DialogoproveedoresComponent implements OnInit {

  proveedor =  {
    "prov_num_documento":"",
  }
  constructor(public dialogRef: MatDialogRef<DialogoproveedoresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router:Router, private service:AuthService) { }

  ngOnInit() {
  }

  save(){
    this.proveedor.prov_num_documento=localStorage.getItem("prov_num_documento");
    this.service.deleteProveedor(this.proveedor.prov_num_documento)
      .subscribe(data=>{
        this.dialogRef.close()
       }
      )
  }

  cancelar(){
        this.dialogRef.close()
  }
}
