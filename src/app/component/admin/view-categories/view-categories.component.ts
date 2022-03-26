import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
categories=[
  {
    cid:5,
    title: "GK",
    description:"Hello"
  }
]
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error:HttpErrorResponse)=>
      {
        console.log(error);
      }
    )
  }

}
