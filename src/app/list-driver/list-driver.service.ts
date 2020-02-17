import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DriverModel } from '../model/DriverModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class ListDriverService {
  
    constructor(private http:HttpClient) {}
  
    private driverUrl = 'http://localhost:8085/driver';
  
    public getDrivers() {
      return this.http.get<DriverModel[]>(this.driverUrl+"/all");
    }

    public deleteDriver(driver) {
      return this.http.delete(this.driverUrl + "/"+ driver.phoneNumber);
    }
  
  }