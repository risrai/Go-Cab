import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DriverModel } from '../model/DriverModel';
import { AuthenticationService } from '../AuthenticationService/authentication.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class ListDriverService {

    header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.auth.getToken()}`)
    }
  
    constructor(private http:HttpClient,private auth:AuthenticationService) {}
  
    private driverUrl = 'http://localhost:8762/driver-service';
  
    public getDrivers() {
      return this.http.get<DriverModel[]>(this.driverUrl+"/all",this.header);
    }

    public deleteDriver(driver) {
      return this.http.delete(this.driverUrl + "/"+ driver.phoneNumber,this.header);
    }
  
  }