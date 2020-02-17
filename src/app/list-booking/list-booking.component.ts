import { Component, OnInit } from '@angular/core';
import { TranitService } from '../tranit.service';
import { ListBookingService } from '../list-booking.service';
import { ListBookingModel } from '../model/ListBookingModel';
import { BookingModel } from '../model/BookingModel.';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent implements OnInit {

  sortButtonPressed:boolean;
  sortSecondButtonPressed:boolean;

  constructor(private bookingService:ListBookingService) {
    this.bookingDetails=[] ;
   }
  bookingDetails:ListBookingModel[];
  p:number=1;
  public searchText : string;

  ngOnInit(): void {

    this.bookingService.showBookings()
    .subscribe(data => {
      this.bookingDetails=data;
    })
  }

  sortByFare(flag:boolean){
    if(flag){
    this.bookingDetails = this.bookingDetails.sort(
      (e1,e2)=>{
        if(e1.fare > e2.fare)
          return 1;

        if(e1.fare < e2.fare)
          return -1;
        return 0;
      }
    )
  }
  else{
    this.bookingDetails = this.bookingDetails.sort(
      (e1,e2)=>{
        if(e1.fare < e2.fare)
          return 1;

        if(e1.fare > e2.fare)
          return -1;
        return 0;
      }
    )
  }
  }

  sortByBookingId(flag:boolean){
    if(flag){
    this.bookingDetails = this.bookingDetails.sort(
      (e1,e2)=>{
        if(e1.bookingId > e2.bookingId)
          return 1;

        if(e1.bookingId < e2.bookingId)
          return -1;
        return 0;
      }
    )
  }
  else{
    this.bookingDetails = this.bookingDetails.sort(
      (e1,e2)=>{
        if(e1.bookingId < e2.bookingId)
          return 1;

        if(e1.bookingId > e2.bookingId)
          return -1;
        return 0;
      }
    )
  }
  }

}
