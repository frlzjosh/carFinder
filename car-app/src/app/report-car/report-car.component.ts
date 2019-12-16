import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarService } from '../../services/car.service'
import { UserService } from 'src/services/user.service';
import { OktaAuthService } from '@okta/okta-angular';
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
  public isAuthenticated: boolean
  public isPostMade = false;

  constructor(
    public http: HttpClient,
    public carService: CarService,
    public userService: UserService,
    public oktaAuth: OktaAuthService
  ) { }

  async ngOnInit() {
    this.beginUserProcess();
    this.checkForCreatePosts();
    this.generateCarPosts();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => {
        this.isAuthenticated = isAuthenticated
      }
    );
  }
  async ngAfterViewInit(){
  }

  async beginUserProcess(){
    const userInformation = await this.oktaAuth.getUser();
    await this.userService.setUser(userInformation);
  }
  async generateCarPosts(){
    this.carService.createCarMakeList();
    this.carMakeList = await this.carService.getCarMakeList();
  }
  checkForCreatePosts(){
    this.carService.isCarPostMade$.subscribe(resp=>{
        this.isPostMade = resp
      }      
    )

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
    let id = this.userService.getUserID();
    let carObject = {id: id, make: this.currentCarMake, model: this.modelOfCar, year: this.yearOfCar, isSalvaged: this.isSalvaged}
    this.carService.queryCars(carObject)
  }


}
