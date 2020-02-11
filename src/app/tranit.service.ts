import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranitService {


  
  constructor(private http:HttpClient) {}

  searchMyRide(cabType:string):Observable<any>
  {
    return this.http.get('http://localhost:8090/transit/search/'+cabType)
  }
}

