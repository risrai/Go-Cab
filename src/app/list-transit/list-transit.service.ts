import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TransitModel } from '../model/TransitModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class ListTransitService {
  
    constructor(private http:HttpClient) {}
  
    private userUrl = 'http://localhost:8090/transit/search';
    //private userUrl = '/api';
  
    public getUsers() {
      return this.http.get<TransitModel[]>(this.userUrl);
    }
  
  }