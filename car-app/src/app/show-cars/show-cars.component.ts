import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CarService } from 'src/services/car.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.scss']
})
export class ShowCarsComponent implements AfterViewInit {

  public usersCars;
  public userID: String

  constructor(
    public carService: CarService,
    public userService: UserService
  ) { }

  async ngAfterViewInit() {
    this.userID = await this.userService.getUserID();
    this.usersCars = await this.carService.getUsersCars(this.userID)
  }

  getUsersCars(){
    console.log(this.userID)
    this.carService.getUsersCars(this.userID);
  }

}
