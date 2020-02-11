import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../modules/modelo/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private URL = "http://localhost:3000/api"
  constructor(private http: HttpClient,
    private router: Router
    ) {  }

  signUp(user){
      return this.http.post<any>(this.URL + "/registro", user);
  } 

  signIn(user){
      console.log(user);
      return this.http.post<any>(this.URL + "/ingresar", user);
  } 

  loggendIn(){
   return !!localStorage.getItem("token");
  }

  getToken(){
    return localStorage.getItem("token");
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/signin"])
   }

   getUsuario(){
    return this.http.get<Usuario[]>(this.URL + "/obtener");
   }

   getUsuarioId(user){
    console.log(user);
    return this.http.get<Usuario>(this.URL + "/obtenerUsuario",user);
   }


   updateUsuario(user){
    return this.http.put<Usuario>(this.URL + "/actualizar", user);
   }
   
   createUsuario(user){
    return this.http.post<any>(this.URL + "/registro", user);
   }  
}
