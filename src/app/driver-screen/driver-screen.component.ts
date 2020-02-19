import { Component, OnInit } from '@angular/core';
import { DriverScreenService } from './driver-screen.service';
import { RiderDetails } from '../model/RiderDetails';

@Component({
  selector: 'app-driver-screen',
  templateUrl: './driver-screen.component.html',
  styleUrls: ['./driver-screen.component.css']
})
export class DriverScreenComponent implements OnInit {
  public riderDetails: RiderDetails[] ;

  constructor(private driverScreenService:DriverScreenService) { 
    this.riderDetails=[];
  }

  ngOnInit() {
    
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
