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
    let headers;
    const token = this.oktaAuth.getAccessToken().then(resp=>{
      return resp;
    }) 
    token.then(resp=>{
      if(resp){
        headers = new HttpHeaders()
        .set('Authorization', resp)
        .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      }
    })

    console.log('headers: ', headers)
    let body = {
      userID: Obj.id,
      make: Obj.make,
      model: Obj.model,
      year: Obj.year,
      isSalvaged: Obj.isSalvaged
    }

    return this.http.post('https://car-app-258808.appspot.com/createCar',body,{headers: headers})
  }
}
