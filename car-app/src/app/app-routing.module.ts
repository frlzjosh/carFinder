import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {LoginComponent} from './login/login.component'
import {CreateComponent } from './create/create.component'
import { ReportCarComponent } from './report-car/report-car.component'
import { AppComponent } from './app.component'
import { OktaAuthGuard } from '@okta/okta-angular';



const routes: Routes = [
  {
    path:'app', component: AppComponent, canActivate: [OktaAuthGuard]
  },
  {
    path:'create-account', component: CreateComponent, canActivate: [OktaAuthGuard]

  },
  {
    path:'report-car', component: ReportCarComponent, canActivate: [OktaAuthGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
