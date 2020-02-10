import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {SigninComponent} from "./components/signin/signin.component";
import { PostsComponent } from './modules/usuarios/posts.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './modules/usuarios/list/list.component';
import { EditComponent } from './modules/usuarios/edit/edit.component';
import { AddComponent } from './modules/usuarios/add/add.component';

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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
