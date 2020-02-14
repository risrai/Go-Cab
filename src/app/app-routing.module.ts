import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RiderComponent} from './rider/rider.component';
import {DriverComponent} from './driver/driver.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { TranitComponent } from './tranit/tranit.component';
import { ListDriverComponent } from './list-driver/list-driver.component';
import { ListRiderComponent } from './list-rider/list-rider.component';
import { ListTransitComponent } from './list-transit/list-transit.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './auth/auth.guard';
import { 
  RoleGuardService as RoleGuard 
} from './auth/role-guard.service';


const routes: Routes = [
  {path: 'rir', component: RiderComponent},
  {path:'driver',component: DriverComponent} ,
  {path:'about',component:HomePageComponent},
  {path:'login',component:LogInComponent},
  {path:'transit',component:TranitComponent,canActivate:[AuthGuard]},
  {path:'list-driver',component:ListDriverComponent,canActivate:[RoleGuard],data:{roles:'ROLE_Admin'}},
  {path:'list-rider',component:ListRiderComponent,canActivate:[AuthGuard]},
  {path:'list-transit',component:ListTransitComponent,canActivate:[AuthGuard]},
  {path: 'payment',component:PaymentComponent,canActivate:[AuthGuard]},
  {path:'searchRide',component:ListTransitComponent,canActivate:[AuthGuard]},
  {path:'list-payment',component:PaymentComponent},
  {path:'goFirst',component:TranitComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
