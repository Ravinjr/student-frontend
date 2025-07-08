import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  public studentList:Array<any> =[];

  public student = {
    name:null,
    age:null
  }

  public onRegister() {
    this.studentList.push(this.student);
    this.student = {
      name:null,
      age:null
    }
    console.log(this.studentList);
  }

  public onClear() {
    this.studentList = [];
  }
}
