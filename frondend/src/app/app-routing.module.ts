import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {SigninComponent} from "./components/signin/signin.component";
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './modules/usuarios/list/list.component';
import { EditComponent } from './modules/usuarios/edit/edit.component';
import { AddComponent } from './modules/usuarios/add/add.component';
import { ListclientesComponent } from './modules/clientes/listclientes/listclientes.component';
import { EditclientesComponent } from './modules/clientes/editclientes/editclientes.component';
import { AddclientesComponent } from './modules/clientes/addclientes/addclientes.component';
import { AddproveedoresComponent } from './modules/proveedores/addproveedores/addproveedores.component';
import { EditproveedoresComponent } from './modules/proveedores/editproveedores/editproveedores.component';
import { ListproveedoresComponent } from './modules/proveedores/listproveedores/listproveedores.component';
import { AddproductosComponent } from './modules/productos/addproductos/addproductos.component';
import { EditproductosComponent } from './modules/productos/editproductos/editproductos.component';
import { ListproductosComponent } from './modules/productos/listproductos/listproductos.component';

const routes: Routes = [{
  path: "",
  redirectTo: "/signin",
  pathMatch: "full"
},
{
  path: "signin",
  component: SigninComponent
}, 
{
    path: "inicio",
    component: DefaultComponent,
    children: [{
      path: "dashboard",
      component: DashboardComponent,
      canActivate: [AuthGuard]
    }, 
    {
        path: "listarUsuario",
        component: ListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "editarUsuario",
        component: EditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "agregarUsuario",
        component: AddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "listarClientes",
        component: ListclientesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "agregarClientes",
        component: AddclientesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "editarClientes",
        component: EditclientesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "listarProveedores",
        component: ListproveedoresComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "agregarProveedor",
        component: AddproveedoresComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "editarProveedor",
        component: EditproveedoresComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "listarProductos",
        component: ListproductosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "agregarProducto",
        component: AddproductosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "editarProducto",
        component: EditproductosComponent,
        canActivate: [AuthGuard]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
