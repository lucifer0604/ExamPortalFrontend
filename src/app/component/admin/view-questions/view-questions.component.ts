import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private snack: MatSnackBar) { }
  qId = 0;
  title = "";
  questions: any = [];
  ngOnInit(): void {
    this.qId = this.route.snapshot.params.qid;
    this.title = this.route.snapshot.params.title;

    this.questionService.getquestionsofQuiz(this.qId).subscribe(
      (data: any) => {
        this.questions = data;
        //console.log(this.questions)
      }
    )
  }

  deleteQuestion(quesId: any) {

    Swal.fire({
      icon: "info",
      title: "Are you sure?",
      confirmButtonText: "Delete",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.questionService.deleteQuestion(quesId).subscribe(
          (data) => {
            this.questions = this.questions.filter((q: any) => q.quesId != quesId);
            this.snack.open("Question Deleted Successfully", "", { duration: 3000 })
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        )
      }
    })

  }

}
