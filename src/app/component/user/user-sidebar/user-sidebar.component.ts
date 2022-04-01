import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  categories: any = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )

  }

}
