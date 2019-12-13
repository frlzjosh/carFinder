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


  public getCarMakes(){
    carMakes.map(resp=>{
      this.carMake.push(resp)
    })
  }

  public queryCars(Obj):Observable<any>{
    let headers: HttpHeaders = new HttpHeaders();
    const token = this.oktaAuth.getAccessToken().then(resp=>{
      return resp
    }) 

    token.then(resp=>{
      if(resp){
        console.log('token: ', resp)
        headers = headers.append('Authorization', resp)
      }
    })
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    console.log('headers: ', headers)
    let params = new HttpParams()
      .set("userID", Obj.id)
      .set("make", Obj.make)
      .set("model", Obj.model)
      .set("year", Obj.year)
      .set("isSalvaged", Obj.isSalvaged)

    return this.http.get('https://car-app-258808.appspot.com/createCar',{params:params, headers: headers})
  }
}
