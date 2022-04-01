import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  cid = 0;
  quizzes: any = [];
  constructor(private route: ActivatedRoute, private quizService: QuizService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cid = params.cid;
      this.quizService.getQuizzes().subscribe(
        (data: any) => {

          if (this.cid == 0) {
            this.quizzes = data.filter((c: any) => c.active == true)
            //this.quizzes = data
          } else {
            this.quizzes = data.filter((c: any) => c.category.cid == this.cid && c.active == true)
            console.log(this.quizzes)
          }

        }
      )

    })


  }

}
