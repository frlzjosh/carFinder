import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {DashboardComponent } from './dashboard/dashboard.component'
import {CreateComponent } from './create/create.component'
import {SearchCarComponent } from './search-car/search-car.component'


const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'create-account', component: CreateComponent
  },
  {
    path:'search-car', component: SearchCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
