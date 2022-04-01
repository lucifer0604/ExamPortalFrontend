import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  qid = 0;
  quiz: any;
  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.qid = this.route.snapshot.params.qid;

    this.quizService.getQuiz(this.qid).subscribe(
      (data) => {
        this.quiz = data;
        console.log(this.quiz)
      },
      (error) => {
        console.log(error);
      }
    )
  }
  //[routerLink]="'/start/'+ qid"
  startQuiz() {
    Swal.fire(
      {
        title: "Do you want to start the quiz?",
        showCancelButton: true,
        confirmButtonText: "Start",
        icon: 'info'

      }
    ).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/start/' + this.qid])
      }
    })
  }
}
