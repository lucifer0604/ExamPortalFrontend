import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './component/admin/add-category/add-category.component';
import { AddQuizComponent } from './component/admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { ShowQuizComponent } from './component/admin/show-quiz/show-quiz.component';
import { ViewCategoriesComponent } from './component/admin/view-categories/view-categories.component';
import { WelcomeComponent } from './component/admin/welcome/welcome.component';
import { UserDashboardComponent } from './component/user/user-dashboard/user-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  { path: 'signup',component: SignupComponent,pathMatch: 'full'},
  { path: 'login',component: LoginComponent,pathMatch: 'full'},
  { path: '',component: HomeComponent,pathMatch: 'full'},
  { 
    path: 'admin-dashboard',
  component: AdminDashboardComponent,
  canActivate:[AdminGuard],
  children:[
    {
      path:"profile",
      component:ProfileComponent
    },
    {
      path:"",
      component:WelcomeComponent
    },
    {
      path:"categories",
      component:ViewCategoriesComponent
    },
    {
      path:"addcategory",
      component:AddCategoryComponent
    },
    {
      path:"quizzes",
      component:ShowQuizComponent
    },
    {
      path:"addquiz",
      component:AddQuizComponent
    }

  ]
},
  { path: 'user-dashboard',component: UserDashboardComponent,pathMatch: 'full',canActivate:[NormalGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
