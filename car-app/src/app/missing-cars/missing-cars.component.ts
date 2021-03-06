import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/services/car.service';

@Component({
  selector: 'app-missing-cars',
  templateUrl: './missing-cars.component.html',
  styleUrls: ['./missing-cars.component.scss']
})
export class MissingCarsComponent implements OnInit {
  public userCars: Object;
  public hasResponseBeenMade: boolean
  
  constructor(public carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }
  deleteCar(user){
    this.carService.deleteUserCar(user.id, user.userID).then(
      resp=>{
        resp.subscribe();
      }
    )
  }
  getCars(){
    this.carService.getAllCars().then(
      (resp)=>{
        resp.subscribe((data)=>{
          if(data){
            this.hasResponseBeenMade = true;
          }
          this.userCars = data;
        })
      }
    )
  }

}
