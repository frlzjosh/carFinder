import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { ReportCarComponent } from './report-car/report-car.component';
import {environment} from './../environments/environment'

export const oktaConfig = {
  issuer: 'https://dev-459112.okta.com/oauth2/default',
  redirectUri: 'https://car-app.netlify.com/implicit/callback',
  clientId: '0oa25pgd7kGzHFvZF357',
  pkce: true,
  scope: ['openid', 'profile', 'email']
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'report-car',
    component: ReportCarComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OktaAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
