import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginData:any={
   "username":'',
   "password":''
 }
  constructor(private snack:MatSnackBar, private loginService:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  formSubmit()
  {
    if(this.loginData.username.trim()=="" || this.loginData.username==null)
    {
      this.snack.open("Username is required",'',{duration:3000, verticalPosition:'top',horizontalPosition:'right'})
      return;
    }
    if(this.loginData.password.trim()=="" || this.loginData.password==null)
    {
      this.snack.open("Password is required",'',{duration:3000, verticalPosition:'top',horizontalPosition:'right'})
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("token generated Successfully");
        console.log(data);

        this.loginService.loginUser(data.token);
        this.loginService.currentUser().subscribe(
          (user:any)=>{
            console.log(user);
            //this.loginService.setUser(user);
            this.loginService.setRole(user.authorities[0].authority);
            if(user.authorities[0].authority=="ADMIN")
            {
              this.route.navigate(['/admin-dashboard']);
            }else  if(user.authorities[0].authority=="NORMAL")
            {
              this.route.navigate(['/user-dashboard']);
            }else{
              this.loginService.logout();
            }

          },
          (error:HttpErrorResponse)=>{
            console.log(error.message);
            this.snack.open("Invalid Details",'',{duration:3000, verticalPosition:'top',horizontalPosition:'right'})
          }
        )
      },
      (error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    );


  }

}
