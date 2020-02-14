import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListBookingModel } from './model/ListBookingModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListBookingService {

  constructor(private http:HttpClient) { }

  public showBookings():Observable<any>
  {
    return this.http.get<ListBookingModel[]>('http://localhost:8080/booking/getBookings')
  }
  
}
