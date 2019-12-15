import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportCarComponent } from './report-car/report-car.component'
import { OktaAuthGuard } from '@okta/okta-angular';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
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
