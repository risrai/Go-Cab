import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiderService {

  constructor(private http:HttpClient) { 
  }

    doRiderRegistration(riderService) {

      return this.http.post("http://localhost:8099/rider/add", riderService);
  }
}
