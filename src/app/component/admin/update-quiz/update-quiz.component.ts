import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private quizService: QuizService, private snack: MatSnackBar, private categoryService: CategoryService) { }
  qid = 0;
  quizData: any;
  categories = [
    {
      cid: "",
      title: "",
      description: ""
    }];
  ngOnInit(): void {
    this.qid = this.route.snapshot.params.qid;
    this.quizService.getQuiz(this.qid).subscribe(
      (data) => {
        this.quizData = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )

    this.categoryService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  updateQuiz() {
    this.quizService.updateQuiz(this.quizData).subscribe(
      (data) => {
        this.snack.open("Quiz updated Successfully", '', { duration: 3000 });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

}
