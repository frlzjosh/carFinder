import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/services/car.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.scss']
})
export class ShowCarsComponent implements OnInit {

  public usersCars;
  public userID = this.userService.getUserID();

  constructor(
    public carService: CarService,
    public userService: UserService
  ) { }

  async ngOnInit() {
    this.usersCars = await this.carService.getUsersCars(this.userID)
  }

}
