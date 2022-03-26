import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private loginService:LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const token=this.loginService.getToken();
   if (token) {
    const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    return next.handle(tokenizedReq);
  }
  return next.handle(req);
  }
}
