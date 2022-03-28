import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiServerUrl=environment.apiBaseUrl
  constructor(private http:HttpClient) { }

  public getQuizzes()
  {
    return this.http.get(`${this.apiServerUrl}/quiz/getquizzes`);
  }

  public addQuiz(quiz:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/quiz/addquiz`, quiz);
  }

  public deleteQuiz(id:any):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/quiz/deletequiz/${id}`);
  }
}
