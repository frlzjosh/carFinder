import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public carMake: String[] = []

  constructor(public http: HttpClient) { }

  public getCarMakes(){
    this.http.get('https://private-anon-d669de0f06-carsapi1.apiary-mock.com/manufacturers').subscribe(resp => {
      Object.keys(resp).forEach((element, index) => {
        this.carMake.push(resp[index].name.toUpperCase())
      })
    })
  }
}
