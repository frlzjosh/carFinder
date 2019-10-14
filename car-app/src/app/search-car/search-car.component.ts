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
  public yesNoList: String[] = ['Yes', 'No']
  public vehicle: String
  public displayMakeMessage: String = 'Select Your Car Make'
  public displayIsSalvagedMessage: String = 'Is Your Car Salvaged'
  public currentCarMake: String
  public modelOfCar: String
  public yearOfCar: String
  public isSalvaged: String

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
    this.displayMakeMessage = 'You Selected: ' + val
    this.currentCarMake = val
  }

  selectYesOrNoOption(val){
    this.displayIsSalvagedMessage = 'You Selected: ' + val
    this.isSalvaged = val
  }

  searchCars(){
    let carObject = {make: this.currentCarMake, model: this.modelOfCar, year: this.yearOfCar, isSalvaged: this.isSalvaged}
    this.carService.queryCars(carObject).subscribe()
  }


}
