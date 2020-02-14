import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingModel } from './model/BookingModel.';
import { PaymentModel } from './model/PaymentModel';

const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
@Injectable({
  providedIn: 'root'
})
export class TranitService {


  
  constructor(private http:HttpClient) {}

  searchMyRide(cabType:string):Observable<any>
  {
    return this.http.get('http://localhost:8090/transit/search/'+cabType)
  }

  
  // return this.http.post("http://localhost:8080/booking/add"
  // ,transitService) ;

  doBooking(transitService)
  {
  console.log(JSON.stringify(transitService));  
  return this.http.post<string>("http://localhost:8080/booking/add"
  ,JSON.stringify(transitService),httpOptions) ;
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

