import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingModel } from '../model/BookingModel.';
import { BookingService } from '../booking.service';
import { TranitService } from '../tranit.service';
import { TransitModel } from '../model/TransitModel';

@Component({
  selector: 'app-tranit',
  templateUrl: './tranit.component.html',
  styleUrls: ['./tranit.component.css']
})
export class TranitComponent implements OnInit {

  booking = new BookingModel();
  bookingObj = new BookingModel();
  httpClient:HttpClient;
  dataResponse: Object;

  constructor(private tranitService:TranitService) { }

  @ViewChild('bookingForm', { static: false }) form: any;
  toastr: any;
  public carType : string;
  public transits = new TransitModel();
  public hidden=true ;

  ngOnInit() {
  }
  

  onDataReceived(data) {
    this.dataResponse = data;

  }
  searchMyRide()
  {
    this.tranitService.searchMyRide(this.carType)
    .subscribe(data=>{this.transits=data;
      console.log(this.transits.cabType);});
    this.hidden=false ;
    
  }
  

  addDetails()
  {

    this.bookingObj={"source":this.booking.source,
     "destination":this.booking.destination,"carType":this.transits.cabType};
     console.log(this.bookingObj);
     this.tranitService.doBooking(this.bookingObj)
     .subscribe(
       data => {this.onDataReceived(data);
       },
        )
  }

 
}
