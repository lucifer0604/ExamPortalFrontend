import { LocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  qid = 0;
  marksGot = 0;
  attempted = 0;
  correctAnswer = 0;
  questions!: any[];
  isSubmit = false;
  timer: any;
  constructor(private questionService: QuestionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
    this.qid = this.route.snapshot.params.qid;
    this.questionService.getquestionsofQuiz(this.qid).subscribe(
      (data: any) => {
        this.questions = data;
        this.timer = this.questions.length * 60;
        this.startTimer();
        this.questions.forEach((e) => {
          e['givenAnswer'] = ''
        });
        //console.log(this.questions)
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
    )

  }

  submitQuiz() {
    Swal.fire(
      {
        icon: 'info',
        title: 'Do You want to Submit',
        confirmButtonText: "Submit",
        showCancelButton: true

      }
    ).then(e => {
      if (e.isConfirmed) {
        this.evalQuiz();
      }
    })
  }

  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.evalQuiz();
        window.clearInterval(t);

      }
      else {
        this.timer--;
      }
    }, 1000)
  }

  getFormatedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;

    return `${mm} min : ${ss} sec`
  }

  evalQuiz() {
    this.isSubmit = true
    let singleMarks = this.questions[0].quiz.maxMarks / this.questions.length
    this.questions.forEach(ans => {
      if (ans.givenAnswer == ans.answer) {
        this.correctAnswer++;
        this.marksGot += singleMarks;
      }
      if (ans.givenAnswer != '') {
        this.attempted++;
      }
    })
  }
}
