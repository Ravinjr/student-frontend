import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpService} from "../../../shared/http.service";
import {Constant} from "../../../util/constant";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public httpClient:HttpClient) { }

  getAllStudents(){
    return this.httpClient.get(HttpService.GET_ALL_STUDENTS);
  }

}
