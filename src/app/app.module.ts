import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { RiderComponent } from './rider/rider.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { DriverComponent } from './driver/driver.component';
import { LogInComponent } from './log-in/log-in.component';
import { DriverPopupComponent } from './driverservice/driver-popup/driver-popup.component';
import { DriverConfirmRideComponent } from './driverservice/driver-confirm-ride/driver-confirm-ride.component';
import { TranitComponent } from './tranit/tranit.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarsComponent,
    RiderComponent,
    HomePageComponent,
    DriverComponent,
    LogInComponent,
    DriverPopupComponent,
    DriverConfirmRideComponent,
    TranitComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
