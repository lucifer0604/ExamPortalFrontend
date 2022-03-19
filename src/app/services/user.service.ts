import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../modal/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiServerUrl=environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  public addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/user/createuser`, user);
  }
}
