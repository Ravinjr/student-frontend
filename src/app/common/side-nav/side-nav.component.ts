import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  public selectedMenu = "home";

  setSelectedMenu(menu:string){
    this.selectedMenu = menu;
  }
}
