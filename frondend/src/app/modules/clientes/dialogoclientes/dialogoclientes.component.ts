import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialogoclientes',
  templateUrl: './dialogoclientes.component.html',
  styleUrls: ['./dialogoclientes.component.css']
})
export class DialogoclientesComponent implements OnInit {

  clientes =  {
    "clie_num_documento":"",
  }
  constructor(public dialogRef: MatDialogRef<DialogoclientesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router:Router, private service:AuthService) { }

  ngOnInit() {
  }

  save(){
    this.clientes.clie_num_documento=localStorage.getItem("clie_num_documento");
    this.service.deleteCliente(this.clientes.clie_num_documento)
      .subscribe(data=>{
        this.dialogRef.close()
       }
      )
  }

  cancelar(){
        this.dialogRef.close()
  }

}
