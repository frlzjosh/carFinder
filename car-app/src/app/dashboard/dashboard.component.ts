import { Component, AfterViewInit, OnInit, AfterContentChecked } from '@angular/core';
import { UserService } from './../../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  public userName: string

  constructor( 
    public userService: UserService,
    public router: Router
  ) { }


  ngOnInit() {
    //async issue
    setTimeout( ()=> {
      this.userName = this.userService.getUserName()
    }, 100)
  }


  logout(){
    this.router.navigate(['/login'])
  }

}
