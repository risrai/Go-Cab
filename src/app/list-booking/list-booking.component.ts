import { Component, OnInit } from '@angular/core';
import { TranitService } from '../tranit.service';
import { ListBookingService } from '../list-booking.service';
import { ListBookingModel } from '../model/ListBookingModel';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent implements OnInit {

  constructor(private bookingService:ListBookingService) {
    this.bookingDetails=[] ;
   }
  bookingDetails:ListBookingModel[];
  p:number=1;

  ngOnInit(): void {

    this.bookingService.showBookings()
    .subscribe(data => {
      this.bookingDetails=data;
    })
  }

}
