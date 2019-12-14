import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carMakes } from './../assets/data/car';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public carMake: string[] = []

  constructor(
    public http: HttpClient,
    public oktaAuth: OktaAuthService
  ) { }


  getCarMakes(){
    carMakes.map(resp=>{
      this.carMake.push(resp)
    })
  }

  async queryCars(Obj){
    let headers;
    const token = await this.oktaAuth.getAccessToken()
    headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    let body = {
      userID: Obj.id,
      make: Obj.make,
      model: Obj.model,
      year: Obj.year,
      isSalvaged: Obj.isSalvaged
    }
    console.log('in queryCars')

    return this.http.post<any>('https://car-app-258808.appspot.com/createCar',body,{headers: headers}).subscribe(resp=>{console.log('response from api call: ', resp)})
  }
}
