import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car-app';
  model: any;

  public user = {}

  ngOnInit(){
    this.user = this.userService.user
  }

  constructor(public router: Router, public userService: UserService){

  }
}
