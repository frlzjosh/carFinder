import { Component, OnInit, OnDestroy, NgModule} from '@angular/core';
import { UserService } from './../../services/user.service'
import { Router } from '@angular/router';
import { Subject, Subscriber, Subscription } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  public userName
  public invalidUserName =  false
  public subscription: Subscription
  public isAuthenticated: boolean;
  
  constructor(
    public userService: UserService,
    public router: Router,
    public oktaAuth: OktaAuthService
  ) {

  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

  loginAndPassUserName(){
    this.subscription = this.userService.checkUser(this.userName)
      .subscribe( resp => {
        if( resp != null){
          // this.router.navigate(['/report-car'])
          this.oktaAuth.loginRedirect('/report-car');
        }
        else{
          this.userName = null  
          this.invalidUserName = true
        }
    })
  }

  ngOnInit(){
    
  }

}
