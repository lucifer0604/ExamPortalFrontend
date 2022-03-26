import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category=
    {
      cid:"",
    title: "",
    description:""
    };
  constructor(private categoryService:CategoryService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.categoryService.addCategory(this.category).subscribe(
      (data:any)=>{
        this.snack.open("Category added Successfully",'',{duration:3000});
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    )
  }
}
