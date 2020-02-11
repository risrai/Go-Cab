import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingModel } from '../model/BookingModel.';
import { BookingService } from '../booking.service';
import { TranitService } from '../tranit.service';

@Component({
  selector: 'app-tranit',
  templateUrl: './tranit.component.html',
  styleUrls: ['./tranit.component.css']
})
export class TranitComponent implements OnInit {

 booking = new BookingModel();
  httpClient:HttpClient;
  dataResponse: Object;

  constructor(private tranitService:TranitService) { }

  @ViewChild('bookingForm', { static: false }) form: any;
  toastr: any;
  public carType;
  public transits;
  public hidden=true ;

  ngOnInit() {
  }
  

  onDataReceived(data) {
    this.dataResponse = data;

  }
  searchMyRide()
  {
    this.tranitService.searchMyRide(this.carType)
    .subscribe(data=>{this.transits=data});
    this.hidden=false ;
  }

 
}
