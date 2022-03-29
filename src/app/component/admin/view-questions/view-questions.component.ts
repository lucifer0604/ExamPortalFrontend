import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }
  quesId = 0;
  title = "";
  questions: any = [];
  ngOnInit(): void {
    this.quesId = this.route.snapshot.params.qid;
    this.title = this.route.snapshot.params.title;

    this.questionService.getquestionsofQuiz(this.quesId).subscribe(
      (data: any) => {
        this.questions = data;
        console.log(this.questions)
      }
    )
  }

}
