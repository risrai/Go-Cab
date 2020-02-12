import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentModel } from './model/PaymentModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  getFareTrip():Observable<any>
  {
      return this.http.get<any>('http://localhost:8080/booking/fare') ;
  }

}
