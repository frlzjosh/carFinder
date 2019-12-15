import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import {environment } from './../../environments/environment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  public environment = environment.clientServer
  constructor(
    public oktaAuth: OktaAuthService,
    public router: Router

  ) {
  }

  async ngOnInit() {
    console.log('server: ', this.environment);
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    if(this.isAuthenticated == true){
      this.router.navigate(['/report-car'])
    }
  }
}
