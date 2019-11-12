import { Component, OnInit, OnDestroy, NgModule} from '@angular/core';
import { UserService } from './../../services/user.service'
import { Router } from '@angular/router';
import { Subject, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  public userName
  public invalidUserName =  false
  public subscription: Subscription
  
  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

  public loginAndPassUserName(){
    this.subscription = this.userService.checkUser(this.userName)
      .subscribe( resp => {
        if( resp != null){
          this.userService.setUser(resp);
          this.router.navigate(['/report-car'])
        }
        else{
          this.userName = null  
          this.invalidUserName = true
        }
    })
  }

}
