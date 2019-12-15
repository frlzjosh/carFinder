import { Component, AfterViewInit, OnInit, AfterContentChecked } from '@angular/core';
import { UserService } from './../../services/user.service'
import { Router } from '@angular/router';
import { OktaAuthService} from '@okta/okta-angular'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  public userName: string;
  public isAuthenticated: boolean;

  constructor( 
    public userService: UserService,
    public router: Router,
    public oktaAuth: OktaAuthService
  ) { }


  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }
  ngAfterContentChecked(){
    this.userName = this.userService.getUserName()
  }


  logout(){
    this.router.navigate(['/login'])
  }

}