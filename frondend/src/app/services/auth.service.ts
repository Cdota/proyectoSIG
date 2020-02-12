import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../modules/modelo/usuario';
import { Cliente } from '../modules/modelo/clientes';
import { Proveedor } from '../modules/modelo/proveedores';
import { Producto } from '../modules/modelo/productos';
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

   getClientes(){
    return this.http.get<Cliente[]>(this.URL + "/obtenerClientes");
   }

   getProveedores(){
    return this.http.get<Proveedor[]>(this.URL + "/obtenerProveedores");
   }

   getProductos(){
    return this.http.get<Producto[]>(this.URL + "/obtenerProductos");
   }

   getUsuarioId(id){
    console.log(id);
    const url = `${this.URL+ "/obtenerUsuario"}/${id}`;
    return this.http.get<Usuario>(url);
   }

   getClientesId(id){
    console.log(id);
    const url = `${this.URL+ "/obtenerCliente"}/${id}`;
    return this.http.get<Cliente>(url);
   }


   updateUsuario(user){
    return this.http.put<Usuario>(this.URL + "/actualizar", user);
   }

   updateClientes(user){
    return this.http.put<Cliente>(this.URL + "/actualizarCliente", user);
   }

   updateProveedores(user){
    return this.http.put<Proveedor>(this.URL + "/actualizarProveedor", user);
   }
   
   createUsuario(user){
    return this.http.post<any>(this.URL + "/registro", user);
   }  
   
   createClientes(user){
    return this.http.post<any>(this.URL + "/registroCliente", user);
   }  

   createProveedores(user){
    return this.http.post<any>(this.URL + "/registroProveedor", user);
   } 

   createProductos(user){
    return this.http.post<any>(this.URL + "/registroProductos", user);
   } 
}
