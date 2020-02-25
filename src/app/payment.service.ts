import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentModel } from './model/PaymentModel';
import { Observable } from 'rxjs';
import { AuthenticationService } from './AuthenticationService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${this.auth.getToken()}`)
  }
  constructor(private http:HttpClient,private auth:AuthenticationService) { }

  getFareTrip():Observable<any>
  {
      return this.http.get<any>('http://localhost:8762/booking-service/fare',this.header) ;
  }

}
