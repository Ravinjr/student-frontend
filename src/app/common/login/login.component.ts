import { Component } from '@angular/core';
import {AuthService} from "../../public/auth.service";
import {Router} from "@angular/router";
import {LoginDTO} from "../dto/Auth";
import {catchError, Observable, throwError} from "rxjs";
import {Constant} from "../../util/constant";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: String = '';
  password: String = '';

  constructor(public authService:AuthService,private router:Router) {
  }

  login() {
    if(this.password != null && this.email != null){
      let loginDto = new LoginDTO();
      loginDto.password = this.password;
      loginDto.username = this.email;
      this.authService.login(loginDto).pipe(
        catchError(
          (err,caught) =>{
            console.log(err)
            return err;
          }
        )
      ).subscribe(
        (response:any)=>{
          console.log(response)
          sessionStorage.setItem(Constant.ACCESS_TOKEN,response.data)
          this.router.navigate(['/dashboard'])
        }
      )
    }
  }
}
