import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportCarComponent } from './report-car/report-car.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ShowCarsComponent } from './show-cars/show-cars.component';
import { MissingCarsComponent } from './missing-cars/missing-cars.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportCarComponent,
    ShowCarsComponent,
    MissingCarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AuthRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
