import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) {
  }
    doBooking(bookingService){
    return this.http.post("http://localhost:8099/booking/add", bookingService);
   }
}
