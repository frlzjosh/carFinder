import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  newUser = {
    firstName: String,
    lastName: String,
    userName: String
  }

  constructor( public userService: UserService) { }

  ngOnInit() {
  }

  createAccountAndPassUserObject(){
    this.userService.createUser(this.newUser).subscribe()
    this.userService.setUserName(this.newUser.firstName)
  }

}
