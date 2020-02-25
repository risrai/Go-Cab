import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './AuthenticationService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  

  constructor(private http: HttpClient,private auth:AuthenticationService) { 

  }

  doDriverRegistration(driverService) {

    return this.http.post("http://localhost:8762/driver-service/add", driverService);

  }
}
