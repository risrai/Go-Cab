import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListBookingModel } from './model/ListBookingModel';
import { Router } from '@angular/router';
import { AuthenticationService } from './AuthenticationService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ListBookingService {

  header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${this.auth.getToken()}`)
      //.set('Access-Control-Allow-Origin',"http://localhost:4200")
  }

  constructor(private http:HttpClient,private auth:AuthenticationService) { }

  public showBookings():Observable<any>
  {
    return this.http.get<ListBookingModel[]>('http://localhost:8762/booking-service/getBookings',this.header)
  }
  
}
