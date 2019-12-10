import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';


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
  constructor(
    public http: HttpClient,
    public okta: OktaAuthService
  ) { }

  setUser(user){
    this.user.id = user.sub
    this.user.firstName = user.given_name
    this.user.lastName = user.family_ame
    this.user.userName = user.name
  }
  
  getUserName(){ 
    return this.user.userName
  }

  createUser(userObj): Observable<any>{
    
    let params = new HttpParams().set("firstName", userObj.firstName).set("lastName", userObj.lastName).set("userName", userObj.userName)
    return this.http.get('http://localhost:8080/createUser', {params: params})
  }

  public checkUser(userName: string): Observable<any>{
    let params = new HttpParams().set("userName", userName)
    return this.http.get('http://localhost:8080/doesUserHaveAnAccount', {params: params});
  }
}
