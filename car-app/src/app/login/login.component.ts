import { Component, OnInit, NgModule} from '@angular/core';
import { UserService } from './../../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName
  public invalidUserName =  false

  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  public loginAndPassUserName(){
    this.userService.checkUser(this.userName).subscribe( resp => {
      console.log(resp)
      if( resp != null){
        this.userService.setUserName(resp.userName);
        this.router.navigate(['/search-car'])
      }
      else{
        this.userName = null
        this.invalidUserName = true
      }
    })
  }

}
