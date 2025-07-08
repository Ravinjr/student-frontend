import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDTO} from "../common/dto/Auth";
import {HttpService} from "../shared/http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient:HttpClient) { }

  login(loginDto:LoginDTO){
    return this.httpClient.post(HttpService.LOGIN,loginDto)
  }
}
