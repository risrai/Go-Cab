import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingModel } from '../model/BookingModel.';
import { TranitService } from '../tranit.service';
import { TransitModel } from '../model/TransitModel';
import { PaymentModel } from '../model/PaymentModel';
import { AuthenticationService } from '../AuthenticationService/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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
  transitsFe:TransitModel;
  transits:TransitModel[];
 
  
  @ViewChild('bookingForm', { static: false }) form: any;
  toastr: any;
  public carType : string;
  public toShowBase= true;
  public toShowFirst=false ;
  public toShowSecond=false ;
  public toShowThird=false ;
  token : string;
  name : string;
  public showOTP=false; 
  public toShowEndTrip=false ;
  public paymentModel=new PaymentModel();
  newFare:number;
  responseModel: Object;
  phonePath : string= "./assets/taxi2.jpg" ;
  

  constructor(private tranitService:TranitService,
    private _auth: AuthenticationService) {
    this.transitsFe = new TransitModel();
    this.transits = [];
  
   }

  
  ngOnInit() {
    // this.token = this._auth.getToken();
    // const helper = new JwtHelperService();
    // const tokenPayload = helper.decodeToken(this.token);
    // this.name = tokenPayload.name;
    console.log("yeh hai" + this.name);
  }
  
  onDataReceived(data) {
    this.dataResponse = data;

  }

  searchMyRide()
  {
    this.tranitService.searchMyRide(this.transitsFe.cabType)
    .subscribe(
      data=>{
         this.transits=data;
         console.log(this.transits);
      });
    this.toShowFirst=true ;
    this.toShowBase=false;
    
  }
  
  getOTP()
  {
    this.showOTP=true;
    this.toShowEndTrip=true ;
  }

  addDetails(index:number)
  {
    this.toShowFirst=false;
    this.toShowSecond=true;
    console.log(index);
    this.bookingObj.source = this.booking.source;
    this.bookingObj.destination = this.booking.destination;
    this.bookingObj.cabType = this.transits[index].cabType;
    this.token = this._auth.getToken();
    const helper = new JwtHelperService();
    const tokenPayload = helper.decodeToken(this.token);
    this.name = tokenPayload.name;
    this.bookingObj.name = this.name;
    console.log(this.bookingObj);
     this.tranitService.doBooking(this.bookingObj)
     .subscribe(
       data => {
         this.onDataReceived(data);
         console.log(this.onDataReceived);
       }
       
        )
       
  }
  getFareTrip()
  {
    this.toShowSecond=false;
    this.toShowThird=true;
    this.showOTP=false;
    this.toShowEndTrip=false;
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
