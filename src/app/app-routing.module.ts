import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {StudentRegistrationComponent} from "./pages/student-registration/student-registration.component";
import {StudentListComponent} from "./pages/student-list/student-list.component";
import {CourseListComponent} from "./pages/course-list/course-list.component";
import {LoginComponent} from "./common/login/login.component";
import {SignUpComponent} from "./common/sign-up/sign-up.component";

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"sign-up",
    component:SignUpComponent
  },
  {
    path:"dashboard",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registration",
    component:StudentRegistrationComponent
  },
  {
    path:"student-list",
    component:StudentListComponent
  },
  {
    path:"course-list",
    component:CourseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
