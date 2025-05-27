import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {StudentRegistrationComponent} from "./pages/student-registration/student-registration.component";
import {StudentListComponent} from "./pages/student-list/student-list.component";
import {CourseListComponent} from "./pages/course-list/course-list.component";

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
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
