import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-frontend';

  constructor(public router:Router) {
  }

  isAuthPage():boolean{
    const route = this.router.url;
    return route === '/' || route === '/login' || route === '/sign-up';
  }
}
