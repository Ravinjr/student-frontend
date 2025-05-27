import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent {

  private http;
  constructor(private httpClient:HttpClient) {
    this.http = httpClient;
  }

  public student = {
    firstName:null,
    lastName:null,
    contactNumber:null
  }

  createStudent(){
    this.http.post("http://localhost:8080/api/v1/student/create-student",this.student)
      .subscribe(data => {
        Swal.fire({
          title: 'Success!',
          text: 'The student adding process succeed',
          icon: 'success',
          confirmButtonText: 'Done'
        })
      })
    this.student = {
      firstName:null,
      lastName:null,
      contactNumber:null
    }
  }
}
