import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carMakes } from './../assets/data/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public carMake: string[] = []

  constructor(public http: HttpClient) { }


  public getCarMakes(){
    carMakes.map(resp=>{
      this.carMake.push(resp)
    })
  }

  public queryCars(Obj):Observable<any>{
    let params = new HttpParams()
      .set("userID", Obj.id)
      .set("make", Obj.make)
      .set("model", Obj.model)
      .set("year", Obj.year)
      .set("isSalvaged", Obj.isSalvaged)

    return this.http.get('https://car-app-258808.appspot.com/createCar',{params:params} )
  }
}
