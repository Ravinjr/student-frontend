import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit{
  public courses: any;
  public http;
  public selectedCourse: any = {};

  constructor(private httpClient:HttpClient) {
    this.http = httpClient;
  }

  loadCourses(){
    this.http.get<any>("http://localhost:8080/api/v1/course/get-courses")
      .subscribe(response =>{
        this.courses = response.data;
    })
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  public course1={
    name:null,
    code:null,
    fee:null,
    duration:null
  }

  createCourse() {
    this.http.post("http://localhost:8080/api/v1/course/add-course",this.course1)
      .subscribe(data => {
        this.loadCourses()
        Swal.fire({
          title: 'Success!',
          text: 'The course adding process succeed',
          icon: 'success',
          confirmButtonText: 'Done'
        })
      })
    this.course1 = {
      name: null,
      code: null,
      fee: null,
      duration: null,
    }
  }

  setSelectedCourse(course:any){
    this.selectedCourse = course;
    console.log(course)
  }

  updateCourse() {
    this.http.put(`http://localhost:8080/api/v1/course/update-course/${this.selectedCourse.courseId}`,this.selectedCourse)
      .subscribe( data => {
        console.log(data)
        // this.selectedCourse = {}
        Swal.fire({
          title: 'Success!',
          text: 'The student update process succeed',
          icon: 'success',
          confirmButtonText: 'Done'
        })
      })
  }

  deleteCourse(){
    this.http.delete("http://localhost:8080/api/v1/course/delete-course/"+this.selectedCourse.courseId)
      .subscribe(data => {
        console.log("deleted"+data);
        this.loadCourses();
        this.selectedCourse = {};
    })
  }

}
