import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {DashboardComponent } from './dashboard/dashboard.component'
import {CreateComponent } from './create/create.component'


const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'create', component: CreateComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
