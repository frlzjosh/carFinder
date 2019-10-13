import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarService } from './../../services/car.service'
@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  public carMakeList: String[]
  public vehicle: String
  public displayMessage: String = 'Select Your Car Make'
  public currentCarMake: String

  constructor(public http: HttpClient, public carService: CarService) { }

  ngOnInit() {
    this.carService.getCarMakes()
  }

  ngAfterViewInit(){
    //async issue.
    setTimeout( () => {
      this.carMakeList = this.carService.carMake
    }, 1)
  }
  

  selectVehicle(val){
    this.displayMessage = 'You Selected: ' + val
    this.currentCarMake = val
  }


}
