import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  getBookingId(){
    //  return this.http.get("http://localhost:9092/v1/booking/getLatestBooking")
  }

  getPayment(bookingId) {
    //  return this.http.get("http://localhost:9092/v1/booking/viewBooking/",bookingId);
  }
}
