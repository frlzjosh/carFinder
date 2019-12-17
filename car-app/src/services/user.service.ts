import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';
import { User } from './../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User = { 
    firstName: null,
    id: null,
    lastName: null,
    userName: null,
  }
  public userData = new BehaviorSubject<User>(this.user);
  public userData$ = this.userData.asObservable();

  constructor(
    public http: HttpClient,
    public oktaAuth: OktaAuthService
  ) { }

  setUser(user){
    this.user.id = user.sub
    this.user.firstName = user.given_name
    this.user.lastName = user.family_name
    this.user.userName = user.name
    this.userData.next(this.user);
    this.createUser(user)
  }
  
  public getUserName(){  
    return this.user.userName
  }

  getUserID(){
    return this.user.id;
  }

  async createUser(userObj){
    const token = await this.oktaAuth.getAccessToken()
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    let body = {
      userID: userObj.sub,
      firstName: userObj.given_name,
      lastName: userObj.family_name,
      userName: userObj.name
    }
    return this.http.post<any>('https://car-app-258808.appspot.com/createUser',body, {headers: headers}).subscribe(resp=>{
    });
  }

  public checkUser(userName: string): Observable<any>{
    let params = new HttpParams().set("userName", userName)
    return this.http.get('https://car-app-258808.appspot.com/doesUserHaveAnAccount', {params: params});
  }
}
