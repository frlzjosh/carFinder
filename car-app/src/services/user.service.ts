import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = { 
    firstName: null,
    id: 0,
    lastName: null,
    userName: null,
  }
  userName$ = new BehaviorSubject([])
  constructor(public http: HttpClient) { }

  public setUser(user){
    this.user.id = user.id
    this.user.firstName = user.firstName
    this.user.lastName = user.lastName
    this.user.userName = user.userName
  }

  public setUserName(userName){   
    this.user.userName = userName
  }
  
  public getUserName(){  
    return this.user.userName
  }

  public createUser(userObj): Observable<any>{
    let params = new HttpParams().set("firstName", userObj.firstName).set("lastName", userObj.lastName).set("userName", userObj.userName)
    return this.http.get('https://car-app-258808.appspot.com//createUser', {params: params})
  }

  public checkUser(userName: string): Observable<any>{
    let params = new HttpParams().set("userName", userName)
    return this.http.get('https://car-app-258808.appspot.com/doesUserHaveAnAccount', {params: params});
  }
}
