import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverScreenService {

  public url= "http://localhost:8080/booking/getRiders";
  constructor(private http:HttpClient) { }

  getRiderDetails():Observable<any>
{
  console.log("ffecfefe");
  return this.http.get(this.url) ;
  
}

}
