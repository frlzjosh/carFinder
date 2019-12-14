import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportCarComponent } from './report-car/report-car.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { TokenService } from 'src/services/token.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateComponent,
    ReportCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    // RouterModule.forRoot(appRoutes),
    // OktaAuthModule.initAuth(config),
    HttpModule,
    AuthRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
