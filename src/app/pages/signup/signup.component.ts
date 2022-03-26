import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import{ User } from '../../modal/User'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public user:User={id:0,username:"",firstname:"",lastname:"",phone:"",email:"",password:""};
  constructor(private userService :UserService,private snack:MatSnackBar) { }

  ngOnInit(): void {}

  formSubmit(){
    if(!this.user.email || !this.user.firstname || !this.user.lastname || !this.user.password || !this.user.username || !this.user.phone)
    {
      this.snack.open("All fileds are required","",{duration:3000,verticalPosition:'top',horizontalPosition:'right'})
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (response: User)=>{
        console.log(response)
        alert("User register successfully");
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
        alert(error.message);
      }
    );
  }
}


