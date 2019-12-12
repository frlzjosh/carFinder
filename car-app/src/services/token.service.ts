import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor(public oktaAuth: OktaAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this method
    console.log('INTERCEPTOR');
    // We retrieve the token, if any
    let token
    token = this.oktaAuth.getAccessToken().then(resp=>{
      return resp
    }) 

    token.then(resp=>{
      if(resp){
        newHeaders = newHeaders.append('authtoken', resp);
      }
    })
    let newHeaders = req.headers;
    console.log(req.headers)
    const authReq = req.clone({headers: newHeaders});
    return next.handle(authReq);
  }
}
