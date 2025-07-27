import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/student/registration/registration.component';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './common/header/header.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CourseListComponent } from './pages/course-list/course-list.component';
import { LoginComponent } from './common/login/login.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import {AuthInterceptor} from "./common/interceptor/auth-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    StudentRegistrationComponent,
    StudentListComponent,
    CourseListComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }
