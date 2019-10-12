import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userName: String

  constructor( public userService: UserService) { }

  ngOnInit() {
    this.userName = this.userService.user.userName
    console.log('name: ', this.userName)
  }

}
