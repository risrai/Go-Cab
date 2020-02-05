import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RiderComponent} from './rider/rider.component';
import {DriverComponent} from './driver/driver.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { TranitComponent } from './tranit/tranit.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path: 'rir', component: RiderComponent},
  {path:'driver',component: DriverComponent} ,
  {path:'about',component:HomePageComponent},
  {path:'login',component:LogInComponent},
  {path:'transit',component:TranitComponent},
  {path: 'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
