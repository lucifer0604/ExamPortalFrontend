import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user/user-dashboard/user-dashboard.component';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './component/admin/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { WelcomeComponent } from './component/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './component/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './component/admin/add-category/add-category.component';
import { ShowQuizComponent } from './component/admin/show-quiz/show-quiz.component';
import { AddQuizComponent } from './component/admin/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UpdateQuizComponent } from './component/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './component/admin/view-questions/view-questions.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ShowQuizComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    NgbModule,
    MatListModule,
    MatSlideToggleModule,
    NgxUiLoaderModule.forRoot(
      { pbThickness: 6 }
    ),
    NgxUiLoaderHttpModule.forRoot(
      { showForeground: true, }
    )

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
