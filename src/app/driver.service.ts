import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { 

  }

  doDriverRegistration(driverService) {

    return this.http.post("http://localhost:8085/driver/add", driverService);

  }
}
