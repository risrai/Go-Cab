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
import { AuthGuard } from './auth/auth.guard';
import { AuthenticationService } from './AuthenticationService/authentication.service';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { DelDriverComponent } from './del-driver/del-driver.component';

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
    AddDriverComponent,
    DelDriverComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AuthGuard ,
    AuthenticationService ,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
