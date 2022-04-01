import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  qId = 0;
  quizTitle = "";
  question: any = {
    quiz: {}
  };
  constructor(private questionService: QuestionService, private snack: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params.qid;
    this.quizTitle = this.route.snapshot.params.title;
    this.question.quiz['qid'] = this.qId
  }

  formSubmit() {
    //this.question.qid = Number(this.qId);
    //console.log(this.question)
    this.questionService.addQuestion(this.question).subscribe(
      (data) => {
        this.question = {
          quiz: {}
        };
        this.snack.open("Question added Successfully", '', { duration: 3000 })

      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

}
