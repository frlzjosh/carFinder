import { Component, OnInit, NgModule} from '@angular/core';
import { UserService } from './../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: String

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  public loginAndPassUserName(){
    this.userService.setUserName(this.userName);
  }

}
