import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiServerUrl=environment.apiBaseUrl
  constructor(private http:HttpClient) { }

  public getCategories(){
    return this.http.get(`${this.apiServerUrl}/category/getcategories`);
  }

  public addCategory(category:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/category/addcategory`, category);
  }
}
