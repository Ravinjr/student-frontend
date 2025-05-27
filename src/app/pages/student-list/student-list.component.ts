import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  public http;
  public studentList:any;
  public selectedStudent:any;
  constructor(private httpClient:HttpClient) {
    this.http = httpClient;
  }

  loadStudents(){
    this.http.get("http://localhost:8080/api/v1/student/student-list")
      .subscribe(data => {
        this.studentList = data;
      })
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  public deleteStudent(){
    this.http.delete("http://localhost:8080/api/v1/student/delete-student/"+ this.selectedStudent.id)
      .subscribe(data => {
        console.log(data);
        this.loadStudents();
        this.selectedStudent = {};
      })
    // console.log(student);
  }

  setSelectedStudent(student:any){
    this.selectedStudent = student;
    console.log(student.id);
  }

  createStudent(){
    this.http.post("http://localhost:8080/api/v1/student/create-student",this.selectedStudent)
      .subscribe(data => {
        console.log(data);
        this.selectedStudent = {}
        this.loadStudents();
        Swal.fire({
          title: 'Success!',
          text: 'The student update process succeed',
          icon: 'success',
          confirmButtonText: 'Done'
        })

      })

  }
}
