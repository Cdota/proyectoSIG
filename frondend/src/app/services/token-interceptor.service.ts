import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authservice: AuthService
  ) { }
  intercept(req, next){

   const tokenreques =  req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.authservice.getToken()}`
      }
    })
    return next.handle(tokenreques);
  }

}
