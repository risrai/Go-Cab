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
import { PaymentComponent } from './payment/payment.component';
import { ListDriverComponent } from './list-driver/list-driver.component';
import { ListRiderComponent } from './list-rider/list-rider.component';
import { ListDriverService } from './list-driver/list-driver.service';
import { ListTransitComponent } from './list-transit/list-transit.component';
import { ListTransitService } from './list-transit/list-transit.service';
import { FooterComponent } from './footer/footer.component';
import {MatSortModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    PaymentComponent,
    ListDriverComponent,
    ListRiderComponent,
    ListTransitComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [ AuthGuard ,
    AuthenticationService ,
    ListDriverService,
    ListTransitService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
