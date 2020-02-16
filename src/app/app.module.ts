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
import {MatSortModule, MatTableModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranitService } from './tranit.service';
import { FilterPipe } from './filter.pipe';
import { RoleGuardService } from './auth/role-guard.service';
import { ListBookingComponent } from './list-booking/list-booking.component';

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
    FooterComponent,
    FilterPipe,
    ListBookingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,Ng2SearchPipeModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ AuthGuard ,
    AuthenticationService ,
    ListDriverService,
    ListTransitService,
    TranitService,
    RoleGuardService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
