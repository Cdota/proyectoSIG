import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthService } from '../app/services/auth.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import  { AuthGuard } from './auth.guard';
import  { TokenInterceptorService } from './services/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { AddComponent } from './modules/usuarios/add/add.component';
import { EditComponent } from './modules/usuarios/edit/edit.component';
import { ListComponent } from './modules/usuarios/list/list.component';
import { MatIconModule, MatButtonModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddclientesComponent } from './modules/clientes/addclientes/addclientes.component';
import { EditclientesComponent } from './modules/clientes/editclientes/editclientes.component';
import { ListclientesComponent } from './modules/clientes/listclientes/listclientes.component';
import { AddproductosComponent } from './modules/productos/addproductos/addproductos.component';
import { EditproductosComponent } from './modules/productos/editproductos/editproductos.component';
import { ListproductosComponent } from './modules/productos/listproductos/listproductos.component';
import { AddproveedoresComponent } from './modules/proveedores/addproveedores/addproveedores.component';
import { EditproveedoresComponent } from './modules/proveedores/editproveedores/editproveedores.component';
import { ListproveedoresComponent } from './modules/proveedores/listproveedores/listproveedores.component';
import { DialogoComponent } from './modules/usuarios/dialogo/dialogo.component';
import { ListcomprasComponent } from './modules/productos/listcompras/listcompras.component';
import { DialogoclientesComponent } from './modules/clientes/dialogoclientes/dialogoclientes.component';
import { DialogoproveedoresComponent } from './modules/proveedores/dialogoproveedores/dialogoproveedores.component';
import { DialogoproductosComponent } from './modules/productos/dialogoproductos/dialogoproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    AddclientesComponent,
    EditclientesComponent,
    ListclientesComponent,
    AddproductosComponent,
    EditproductosComponent,
    ListproductosComponent,
    AddproveedoresComponent,
    EditproveedoresComponent,
    ListproveedoresComponent,
    DialogoComponent,
    ListcomprasComponent,
    DialogoclientesComponent,
    DialogoproveedoresComponent,
    DialogoproductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    DefaultModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule
  ],

  entryComponents:[
    DialogoComponent,
    DialogoclientesComponent,
    DialogoproveedoresComponent,
    DialogoproductosComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
