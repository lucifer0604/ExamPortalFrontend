import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {
  quizzes = [
    {
      qid: 0,
      title: "",
      description: "",
      maxMarks: "",
      numberOfQuestions: "",
      active: "",
      category: {
        cid: "",
        title: "",
        description: ""
      }
    }
  ]
  constructor(private quizService: QuizService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        // console.log(this.quizzes)
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  public deleteQuiz(id: any) {

    Swal.fire({
      icon: "info",
      title: "Are you sure?",
      confirmButtonText: "Delete",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.quizService.deleteQuiz(id).subscribe(
          (data) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qid != id)
            this.snack.open("Quiz deleted successfully", '', { duration: 3000, verticalPosition: 'top', horizontalPosition: 'right' })
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        )
      }
    })
  }
}
