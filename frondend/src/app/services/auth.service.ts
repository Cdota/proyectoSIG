import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../modules/modelo/usuario';
import { Cliente } from '../modules/modelo/clientes';
import { Proveedor } from '../modules/modelo/proveedores';
import { Producto } from '../modules/modelo/productos';
import { Venta } from '../modules/modelo/ventas';
import { Categoria } from '../modules/modelo/categoria';
import { Ciudad } from '../modules/modelo/ciudad';
import { Documento } from '../modules/modelo/documento';
import { Rol } from '../modules/modelo/rol';

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
    localStorage.removeItem("nombre");
    this.router.navigate(["/signin"])
   }

   getUsuario(){
    return this.http.get<Usuario[]>(this.URL + "/obtener");
   }

   getClientes(){
    return this.http.get<Cliente[]>(this.URL + "/obtenerClientes");
   }

   getProvedor(){
    return this.http.get<any>(this.URL + "/obtenerProveedores");
   }
   
   getCiudad(){
    return this.http.get<Ciudad[]>(this.URL + "/obtenerCiudades");
   }
   getRol(){
    return this.http.get<Rol[]>(this.URL + "/obtenerRol");
   }

   getDocumento(){
    return this.http.get<Documento[]>(this.URL + "/obtenerDocumento");
   }

   getIngresos(){
    return this.http.get<any>(this.URL + "/obtenerIngresos");
   }

   getEgresos(){
    return this.http.get<any>(this.URL + "/obtenerEgresos");
   }

   getProveedores(){
    return this.http.get<Proveedor[]>(this.URL + "/obtenerProveedores");
   }

   getProductos(){
    return this.http.get<Producto[]>(this.URL + "/obtenerProductos");
   }

   getVentas(){
    return this.http.get<Venta[]>(this.URL + "/obtenerVentas");
   }

   getCategoria(){
    return this.http.get<Categoria[]>(this.URL + "/obtenerCategoria");
   }

   getCompras(){
    return this.http.get<Producto[]>(this.URL + "/obtenerProductosVenta");
   }

   getUsuarioId(id){
    console.log(id);
    const url = `${this.URL+ "/obtenerUsuario"}/${id}`;
    return this.http.get<Usuario>(url);
   }

   getClientesId(id){
    console.log(id);
    const url = `${this.URL+ "/obtenerProducto"}/${id}`;
    return this.http.get<Producto>(url);
   }

   getProductosId(id){
    console.log(id);
    const url = `${this.URL+ "/obtenerProducto"}/${id}`;
    return this.http.get<Cliente>(url);
   }

   getProductosVentas(){
    //console.log(usuario);
   return this.http.get<Venta[]>(this.URL + "/obtenerCompras");
   } 

   getProductosCompra(){
    //console.log(usuario);
   return this.http.get<Venta[]>(this.URL + "/obtenerProductosCompra");
   } 

   updateUsuario(user){
    return this.http.put<Usuario>(this.URL + "/actualizar", user);
   }

   updateClientes(user){
    return this.http.put<Cliente>(this.URL + "/actualizarCliente", user);
   }

   updateProducto(user){
    return this.http.put<Producto>(this.URL + "/actualizarProducto", user);
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
     //console.log(usuario);
    return this.http.post<any>(this.URL + "/registroProductos", user);
   } 

   createVentasDatos(user){
   return this.http.post<any>(this.URL + "/registroVentaProductos", user);
  } 

   deleteUsuario(id){
    console.log(id);
    const url = `${this.URL+ "/eliminarUsuario"}/${id}`;
    return this.http.delete<Usuario>(url);
   } 

   deleteProveedor(id){
    console.log(id);
    const url = `${this.URL+ "/eliminarProveedor"}/${id}`;
    return this.http.delete<Proveedor>(url);
   } 

   deleteCliente(id){
    console.log(id);
    const url = `${this.URL+ "/eliminarCliente"}/${id}`;
    return this.http.delete<Cliente>(url);
   } 

   ElimnarProducto(id){
    console.log(id);
    const url = `${this.URL+ "/eliminarProductoVenta"}/${id}`;
    return this.http.delete<Producto>(url);
   } 


   deleteVenta(id){
    console.log(id);
    const url = `${this.URL+ "/eliminarVenta"}/${id}`;
    return this.http.delete<Cliente>(url);
   } 

   deleteProducto(id){
    console.log(id);
    const url = `${this.URL+ "/eliminarProducto"}/${id}`;
    return this.http.delete<Producto>(url);
   } 
}
