import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarService } from '../../services/car.service'
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-report-car',
  templateUrl: './report-car.component.html',
  styleUrls: ['./report-car.component.scss']
})
export class ReportCarComponent implements OnInit {

  public carMakeList: string[] = []
  public yesNoList: string[] = ['Yes', 'No']
  public vehicle: string
  public displayMakeMessage: string = 'Select Your Car Make'
  public displayIsSalvagedMessage: string = 'Is Your Car Salvaged'
  public currentCarMake: string
  public modelOfCar: string
  public yearOfCar: string
  public isSalvaged: string

  constructor(
    public http: HttpClient,
    public carService: CarService,
    public userService: UserService
  ) { }

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

  reportCar(){
    let id = this.userService.user.id
    let carObject = {id: id, make: this.currentCarMake, model: this.modelOfCar, year: this.yearOfCar, isSalvaged: this.isSalvaged}
    this.carService.queryCars(carObject).subscribe()
  }


}
