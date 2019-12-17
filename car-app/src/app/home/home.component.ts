import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isAuthenticated: boolean;

  constructor(
    public oktaAuth: OktaAuthService,
    public router: Router,
    public userService: UserService
  ) {}

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    if(this.isAuthenticated == true){
      this.beginUserProcess();
      this.router.navigate(['/report-car'])
    }
  }

  async beginUserProcess(){
    const userInformation = await this.oktaAuth.getUser();
    await this.userService.setUser(userInformation);
  }
}
