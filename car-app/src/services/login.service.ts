import { Injectable, } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  
  
  constructor(
    public okta: OktaAuthService,
    public http: HttpClient
  ) { 

  }
}
