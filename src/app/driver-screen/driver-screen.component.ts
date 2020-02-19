import { Component, OnInit } from '@angular/core';
import { DriverScreenService } from './driver-screen.service';
import { RiderDetails } from '../model/RiderDetails';
import { AuthenticationService } from '../AuthenticationService/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-driver-screen',
  templateUrl: './driver-screen.component.html',
  styleUrls: ['./driver-screen.component.css']
})
export class DriverScreenComponent implements OnInit {
  public riderDetails: RiderDetails[] ;
  token : string;
  name : string;
  constructor(private driverScreenService:DriverScreenService,
    private _auth: AuthenticationService) { 
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
    console.log("cedcbju");
    this.driverScreenService.getRiderDetails()
    .subscribe(
        data=>{
          this.riderDetails=data;
           console.log(this.riderDetails);
        }
    );
  

      } 

}
