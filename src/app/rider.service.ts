import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './AuthenticationService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RiderService {

  
  constructor(private http:HttpClient,private auth:AuthenticationService) { 
  }

    doRiderRegistration(riderService) {
      console.log(riderService);
      return this.http.post("http://localhost:8762/rider-service/add", riderService);
  }
}
