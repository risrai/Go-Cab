import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../AuthenticationService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DriverScreenService {

  header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${this.auth.getToken()}`)
      .set('Access-Control-Allow-Origin',"http://localhost:4200")
  }

  public url= "http://localhost:8762/booking-service/getRiders";
  constructor(private http:HttpClient,private auth:AuthenticationService) { }

  getRiderDetails():Observable<any>
{
  //console.log("ffecfefe");
  return this.http.get(this.url,this.header) ;
  
}

}
