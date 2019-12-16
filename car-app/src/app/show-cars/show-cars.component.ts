import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CarService } from 'src/services/car.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.scss'],
})
export class ShowCarsComponent implements OnInit {

  public usersCars = [];
  public userID: string
  userName: string;

  constructor(
    public carService: CarService,
    public userService: UserService
  ) { }

  async ngOnInit(){
    this.userService.userData$.subscribe((usr)=>{
      this.userID = usr.id;
      this.userName = usr.userName;
      console.log(usr);
      this.carService.getUsersCars(usr.id).then(
        (resp)=>{
          resp.subscribe((cars)=>{
            console.log(cars);
            this.usersCars = cars;
          })
        }
      )
    })
  }

  getUsersCars(){
    this.carService.getUsersCars(this.userID).then(
      promiseResponse=>{
        promiseResponse.subscribe(
          usrCars=>{
            this.usersCars = usrCars;
          }
        )
      }
    )
  }

  deleteCar(user){
    this.carService.deleteUserCar(user.id, this.userID).then(resp=>resp.subscribe())
  }

}
