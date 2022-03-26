import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any={id:0,username:"",firstname:"",lastname:"",phone:"",email:"",password:"",proflie:""};;
  constructor(private snack:MatSnackBar,private userService:UserService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUser().subscribe(
      (data:any)=>{
        this.user=data;
        //console.log(this.user); 
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    )
  }

  formSubmit()
  {
    let localUser={
      "id":this.user.id,
      "username": this.user.username,
      "firstname" : this.user.firstname,
      "lastname": this.user.lastname,
      "password": this.user.password,
      "email": this.user.email,
      "phone": this.user.phone,
      "profile":this.user.profile
  }
    this.userService.updateUser(localUser).subscribe(
      (data:any)=>{
        this.snack.open("user details updated Successfully",'',{duration:3000});
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    )
  }

}
