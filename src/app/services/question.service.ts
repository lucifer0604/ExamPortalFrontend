import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiServerUrl = environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  public addQuestion(question: any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/question/addquestion`, question);
  }

  public getquestionsofQuiz(id: any) {
    return this.http.get(`${this.apiServerUrl}/question/getquestionsofQuiz/${id}`);
  }
  public deleteQuestion(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/question/deletequestion/${id}`);
  }
}
