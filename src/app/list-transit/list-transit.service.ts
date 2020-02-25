import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TransitModel } from '../model/TransitModel';
import { AuthenticationService } from '../AuthenticationService/authentication.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class ListTransitService {

    header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.auth.getToken()}`)
        .set('Access-Control-Allow-Origin',"http://localhost:4200")
    }
  
    constructor(private http:HttpClient,private auth:AuthenticationService) {}
  
    private userUrl = 'http://localhost:8762/transit-service/search';
    //private userUrl = '/api';
  
    public getUsers() {
      return this.http.get<TransitModel[]>(this.userUrl,this.header);
    }
  
  }