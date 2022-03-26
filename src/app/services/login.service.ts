import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl=environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  public currentUser(){
    return this.http.get(`${this.apiServerUrl}/current-user`);
  }

  public generateToken(loginData:any):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/generate-token`, loginData)
  }

  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;
  }
  public isLoggedIn(){
    let token=localStorage.getItem('token');
    if(token==undefined || token==null || token=='')
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  public logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem("role");
  }
  public getToken()
  {
    return localStorage.getItem('token');
  }
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user))
  }

  public getUser()
  {
    let userStr=localStorage.getItem('user');

    if(userStr!=null)
    return JSON.stringify(userStr);
    else
    {
      this.logout()
      return null;
    }
  }

  public setRole(role:any){
    localStorage.setItem('role',role);
  }
  public getRole(){
    return localStorage.getItem('role');
  }
 }
