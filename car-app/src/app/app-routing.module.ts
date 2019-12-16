import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportCarComponent } from './report-car/report-car.component'
import { OktaAuthGuard } from '@okta/okta-angular';
import { MissingCarsComponent } from './missing-cars/missing-cars.component';


const routes: Routes = [
  {
    path:'report-car', component: ReportCarComponent, canActivate: [OktaAuthGuard]
  },
  {
    path:'missing-cars', component: MissingCarsComponent, canActivate: [OktaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
