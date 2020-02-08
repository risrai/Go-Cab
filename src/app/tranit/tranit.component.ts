import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingModel } from '../model/BookingModel.';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-tranit',
  templateUrl: './tranit.component.html',
  styleUrls: ['./tranit.component.css']
})
export class TranitComponent implements OnInit {

  booking= new BookingModel();
  bookingObj:Object;
  httpClient:HttpClient;
  dataResponse: Object;

  constructor(private bookingService:BookingService) { }

  @ViewChild('bookingForm', { static: false }) form: any;
  toastr: any;

  ngOnInit() {
  }

  onDataReceived(data) {
    this.dataResponse = data;

  }

  onSubmit()
  {
    this.bookingObj={"bookingId":this.booking.bookingId,"source":this.booking.source,
    "destination":this.booking.destination,"cabType":this.booking.cabType}
    this.bookingService.doBooking(this.bookingObj)
    .subscribe(
      data => {this.onDataReceived(data);
      },
       )
  }
}
