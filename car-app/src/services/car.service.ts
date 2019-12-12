import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public carMake: string[] = []

  constructor(public http: HttpClient) { }

  public getCarMakes(){
    this.http.get('https://private-anon-d669de0f06-carsapi1.apiary-mock.com/manufacturers').subscribe(resp => {
      Object.keys(resp).forEach((element, index) => {
        this.carMake.push(resp[index].name.toUpperCase())
      })
    })
  }

  public queryCars(Obj):Observable<any>{
    let params = new HttpParams()
      .set("userID", Obj.id)
      .set("make", Obj.make)
      .set("model", Obj.model)
      .set("year", Obj.year)
      .set("isSalvaged", Obj.isSalvaged)

    return this.http.get('http://localhost:8080/createCar',{params:params} )
  }
}
