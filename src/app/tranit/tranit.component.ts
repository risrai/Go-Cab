import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingModel } from '../model/BookingModel.';
import { BookingService } from '../booking.service';
import { TranitService } from '../tranit.service';
import { TransitModel } from '../model/TransitModel';
import { PaymentModel } from '../model/PaymentModel';

@Component({
  selector: 'app-tranit',
  templateUrl: './tranit.component.html',
  styleUrls: ['./tranit.component.css']
})
export class TranitComponent implements OnInit {

  cbooking;
  booking = new BookingModel();
  isProcessing : boolean = false;
  showToast = false;
  bookingObj = new BookingModel();
  httpClient:HttpClient;
  dataResponse: Object;
  
  constructor(private tranitService:TranitService) { }

  @ViewChild('bookingForm', { static: false }) form: any;
  toastr: any;
  public carType : string;
  public transits = new TransitModel();
  public toShowBase= true;
  public toShowFirst=false ;
  public toShowSecond=false ;
  public toShowThird=false ;
  public paymentModel=new PaymentModel();
  newFare:number;
  responseModel: Object;

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
    this.toShowFirst=true ;
    this.toShowBase=false;
    
  }
  

  addDetails()
  {
    this.toShowFirst=false;
    this.toShowSecond=true;
    this.bookingObj={"source":this.booking.source,
     "destination":this.booking.destination,"carType":this.transits.cabType};
     console.log(this.bookingObj);
     this.tranitService.doBooking(this.bookingObj)
     .subscribe(
       data => {this.onDataReceived(data);
       },
        )
       
  }
  getFareTrip()
  {
    this.toShowSecond=false;
    this.toShowThird=true;
    this.bookingObj={"source":this.booking.source,
     "destination":this.booking.destination,"carType":this.transits.cabType};
     console.log(this.bookingObj);
    this.tranitService.getFareTrip(this.bookingObj)
    .subscribe(
      data=>{
        this.cbooking = data;
        console.log(data);
    });
  }
 
  pay()
 {
   this.showToast= true;
 } 

 closeToast() {
  this.showToast = false;
  this.form.reset();
}
}
