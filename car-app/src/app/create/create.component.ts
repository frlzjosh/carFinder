import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  newUser = {
    firstName: null,
    lastName: null,
    userName: null
  }

  constructor( public userService: UserService) { }

  ngOnInit() {
    this.userService.setUserName(null)
  }

  createAccountAndPassUserObject(){
    this.userService.createUser(this.newUser).subscribe(data=>{
      this.userService.setUser(data)
    })
  }

}
