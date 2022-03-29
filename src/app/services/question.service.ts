import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiServerUrl = environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  public getquestionsofQuiz(id: any) {
    return this.http.get(`${this.apiServerUrl}/question/getquestionsofQuiz/${id}`);
  }
}
