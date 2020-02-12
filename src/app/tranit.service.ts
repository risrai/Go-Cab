import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingModel } from './model/BookingModel.';
import { PaymentModel } from './model/PaymentModel';

@Injectable({
  providedIn: 'root'
})
export class TranitService {


  
  constructor(private http:HttpClient) {}

  searchMyRide(cabType:string):Observable<any>
  {
    return this.http.get('http://localhost:8090/transit/search/'+cabType)
  }

  doBooking(transitService:BookingModel)
  {
  return this.http.post("http://localhost:8080/booking/add"
  ,transitService) ;
  }

  getFareTrip(booking):Observable<any>
  {
    console.log(booking);
      return this.http.post('http://localhost:8080/booking/fare',
      {
        "source":booking.source ,
        "destination": booking.destination, 
      }) ;
  }

}

