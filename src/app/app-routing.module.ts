import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './component/admin/add-category/add-category.component';
import { AddQuestionComponent } from './component/admin/add-question/add-question.component';
import { AddQuizComponent } from './component/admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { ShowQuizComponent } from './component/admin/show-quiz/show-quiz.component';
import { UpdateQuizComponent } from './component/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './component/admin/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './component/admin/view-questions/view-questions.component';
import { WelcomeComponent } from './component/admin/welcome/welcome.component';
import { InstructionComponent } from './component/user/instruction/instruction.component';
import { LoadQuizComponent } from './component/user/load-quiz/load-quiz.component';
import { StartComponent } from './component/user/start/start.component';
import { UserDashboardComponent } from './component/user/user-dashboard/user-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "",
        component: WelcomeComponent
      },
      {
        path: "categories",
        component: ViewCategoriesComponent
      },
      {
        path: "addcategory",
        component: AddCategoryComponent
      },
      {
        path: "quizzes",
        component: ShowQuizComponent
      },
      {
        path: "addquiz",
        component: AddQuizComponent
      },
      {
        path: "updatequiz/:qid",
        component: UpdateQuizComponent
      },
      {
        path: "viewquestions/:qid/:title",
        component: ViewQuestionsComponent
      },
      {
        path: "addquestions/:qid/:title",
        component: AddQuestionComponent
      }

    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "quizzes/:cid",
        component: LoadQuizComponent
      }
    ]
  },
  {
    path: "instruction/:qid",
    component: InstructionComponent,
    canActivate: [NormalGuard]
  },
  {
    path: "start/:qid",
    component: StartComponent,
    canActivate: [NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
