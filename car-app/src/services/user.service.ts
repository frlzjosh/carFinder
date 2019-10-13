import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = { 
    userName: String = null
  }
  constructor(public http: HttpClient) { }

  public setUserName(userName: String){
    this.user.userName = userName
  }
  public createUser(userObj): Observable<any>{
    this.setUserName(userObj.userName)
    let params = new HttpParams().set("firstName", userObj.firstName).set("lastName", userObj.lastName).set("userName", userObj.userName)
    return this.http.get('http://localhost:8080/createUser', {params: params})
  }
}
