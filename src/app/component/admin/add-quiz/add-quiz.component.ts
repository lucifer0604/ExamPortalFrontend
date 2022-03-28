import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories = [
    {
      cid: "",
      title: "",
      description: ""
    }];

  categoryData =
    {
      qid: "",
      title: "",
      description: "",
      maxMarks: "",
      numberOfQuestions: "",
      active: true,
      category: {
        cid: ""
      }
    }
  constructor(private categoryService: CategoryService, private snack: MatSnackBar, private quizService: QuizService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  formSubmit() {
    console.log(this.categoryData)
    this.quizService.addQuiz(this.categoryData).subscribe(
      (data: any) => {
        this.categoryData={
          qid: "",
          title: "",
          description: "",
          maxMarks: "",
          numberOfQuestions: "",
          active: true,
          category: {
            cid: ""
          }
        }
        this.snack.open("Quiz added Successfully", '', { duration: 3000 });
        },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
    )
  }

}
