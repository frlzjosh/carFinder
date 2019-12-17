import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { carMakes } from './../assets/data/car'
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public carMakeList: string[] = []
  public isCarPostMade =new BehaviorSubject<boolean>(false);
  public isCarPostMade$ =  this.isCarPostMade.asObservable();

  constructor(
    public http: HttpClient,
    public oktaAuth: OktaAuthService
  ) { }


  createCarMakeList(){
    carMakes.map(resp=>{
      this.carMakeList.push(resp)
    })
  }
  getCarMakeList(): string[]{
    return this.carMakeList;
  }

  async queryCars(Obj){
    const token = await this.oktaAuth.getAccessToken()
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    let body = {
      userID: Obj.id,
      make: Obj.make,
      model: Obj.model,
      year: Obj.year,
      isSalvaged: Obj.isSalvaged
    }
    return this.http.post<any>('https://car-app-258808.appspot.com/createCar',body,{headers: headers})
      .subscribe((resp)=>{
        this.isCarPostMade.next(true);
      })
  }

  async getUsersCars(userID){
    const token = await this.oktaAuth.getAccessToken()
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    let params = new HttpParams().set("userID", userID)

    return this.http.get<any>('https://car-app-258808.appspot.com/getCarsByUserID',{
      params: params,
      headers: headers
    })
  }

  async deleteUserCar(carID:number, _userID: string){
    const token = await this.oktaAuth.getAccessToken()
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    })
    const params = new HttpParams()
      .set("carID", JSON.stringify(carID))
      .set("userID", _userID)

    return this.http.delete('https://car-app-258808.appspot.com/deleteCar', {params: params, headers: headers});
  }

  async getAllCars(){
    const token = await this.oktaAuth.getAccessToken()
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    })

    return this.http.get('https://car-app-258808.appspot.com/getAllCars', {headers:headers})
  }

}
