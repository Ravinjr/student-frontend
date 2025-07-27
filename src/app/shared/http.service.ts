import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  static BASE_URL = environment.API_BASE_URL
  static LOGIN = environment.USER_LOGIN
  static GET_ALL_STUDENTS = environment.GET_ALL_STUDENTS
}
