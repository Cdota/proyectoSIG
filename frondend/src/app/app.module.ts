import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuthService } from '../app/services/auth.service';

import  { AuthGuard } from './auth.guard';
import  { TokenInterceptorService } from './services/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { AddComponent } from './modules/usuarios/add/add.component';
import { EditComponent } from './modules/usuarios/edit/edit.component';
import { ListComponent } from './modules/usuarios/list/list.component';
import { MatIconModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PrivateTasksComponent,
    TasksComponent,
    AddComponent,
    EditComponent,
    ListComponent
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
    MatIconModule
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
