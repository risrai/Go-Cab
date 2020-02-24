import { Component, OnInit } from '@angular/core';
import { DriverScreenService } from './driver-screen.service';
import { RiderDetails } from '../model/RiderDetails';
import { AuthenticationService } from '../AuthenticationService/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-driver-screen',
  templateUrl: './driver-screen.component.html',
  styleUrls: ['./driver-screen.component.css']
})
export class DriverScreenComponent implements OnInit {
  public riderDetails: RiderDetails[] ;
  token : string;
  name : string;
  public toShowRiderRequest=false;
  public enterOTP=false;
  constructor(private driverScreenService:DriverScreenService,
    private _auth: AuthenticationService,private route:Router) { 
    this.riderDetails=[];
  }

  ngOnInit(): void {
    this.token = this._auth.getToken();
    const helper = new JwtHelperService();
    const tokenPayload = helper.decodeToken(this.token);
    this.name = tokenPayload.name;
    console.log(this.name);
  }

  getRiderDetails()
  {
    this.toShowRiderRequest=true;
    console.log("cedcbju");
    this.driverScreenService.getRiderDetails()
    .subscribe(
        data=>{
          this.riderDetails=data;
           console.log(this.riderDetails);
        }
    );
  

      } 

      
       rejectRide() {
        if(confirm("Are you sure to cancel the request ?"))
        {
          this.route.navigate(['driverScreen2']);
        }
        // else 
        // this.route.navigate(['driverScreen']);
      }

      acceptRide(){
        this.toShowRiderRequest=false;
        this.enterOTP=true;
      }
      
      lastButton()
      {
        alert("Your ride has started!!")
      }
      
}
