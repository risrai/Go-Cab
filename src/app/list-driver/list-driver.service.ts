import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DriverModel } from '../model/DriverModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class ListDriverService {
  
    constructor(private http:HttpClient) {}
  
    private userUrl = 'http://localhost:8085/driver/all';
    //private userUrl = '/api';
  
    public getUsers() {
      return this.http.get<DriverModel[]>(this.userUrl);
    }
  
  }