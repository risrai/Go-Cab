import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingModel } from './model/BookingModel.';
import { PaymentModel } from './model/PaymentModel';
import { AuthenticationService } from './AuthenticationService/authentication.service';

const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
@Injectable({
  providedIn: 'root'
})
export class TranitService {

   header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${this.auth.getToken()}`)
  }
  
  constructor(private http:HttpClient,private auth:AuthenticationService) {}

  searchMyRide(cabType:string):Observable<any>
  {
   
    return this.http.get('http://localhost:8762/transit-service/search/'+cabType,this.header)
  }

  
  // return this.http.post("http://localhost:8080/booking/add"
  // ,transitService) ;

  doBooking(transitService)
  {
  console.log(JSON.stringify(transitService));  
  return this.http.post<string>("http://localhost:8762/booking-service/add"
  ,JSON.stringify(transitService),this.header) ;
  }

  getFareTrip(booking):Observable<any>
  {
    console.log(booking);
      return this.http.post('http://localhost:8762/booking-service/fare',
      {
        "source":booking.source ,
        "destination": booking.destination, 
      },this.header) ;
  }

}

