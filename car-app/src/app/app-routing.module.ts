import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {DashboardComponent } from './dashboard/dashboard.component'
import {CreateComponent } from './create/create.component'
import { ReportCarComponent } from './report-car/report-car.component'


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'create-account', component: CreateComponent
  },
  {
    path:'report-car', component: ReportCarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
