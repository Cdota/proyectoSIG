import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ListComponent } from '../../usuarios/list/list.component';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

  user =  {
    "usu_num_documento":"",
  }

  constructor( public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router:Router, private service:AuthService) { }

  ngOnInit() {
  }

  save(){
    this.user.usu_num_documento=localStorage.getItem("usu_num_documento");
    this.service.deleteUsuario(this.user.usu_num_documento)
      .subscribe(data=>{
        this.dialogRef.close()
       }
      )
  }

  cancelar(){
        this.dialogRef.close()
  }
}
