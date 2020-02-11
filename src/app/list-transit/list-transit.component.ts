import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TransitModel } from '../model/TransitModel';
import { ListTransitService } from './list-transit.service';
import { BookingModel } from '../model/BookingModel.';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-list-transit',
  templateUrl: './list-transit.component.html',
  styleUrls: ['./list-transit.component.css']
})
export class ListTransitComponent implements OnInit {


  booking= new BookingModel();
  bookingObj:Object;
  httpClient:HttpClient;
  dataResponse: Object;
  transits: TransitModel[];

  constructor(private router: Router, private listTransitService: ListTransitService) { }

  onDataReceived(data) {
    this.dataResponse = data;

  }

  // addDetails()
  // {
  //   this.bookingObj={"source":this.booking.source,
  //   "destination":this.booking.destination,"cabType":this.booking.cabType}
  //   this.listTransitService.doBooking(this.bookingObj)
  //   .subscribe(
  //     data => {this.onDataReceived(data);
  //     },
  //      )
  // }

  ngOnInit() {this.listTransitService.getUsers()
    .subscribe( data => {
      this.transits = data;
    });
  };

}
