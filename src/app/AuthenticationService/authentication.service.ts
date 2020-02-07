import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginModel } from '../model/LoginModel';
//import { RegisterUser } from '../model/registeruser';
import { Observable } from 'rxjs';
import { UserModel } from '../model/UserModel';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  
  private url = "http://localhost:8086/user";
  options: any;
  flag:any;
  
  

  constructor(private http:HttpClient,private router : Router) { }

  getAllUsers() : Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.url+"/list");
  }

  login(loginData: LoginModel) {

    this.options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(this.url+"/authenticate",JSON.stringify(loginData),this.options);
   // throw new Error("Method not implemented.");
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    
    return !!localStorage.getItem('token');
  }

  getToken():string {
    return localStorage.getItem('token');
  }

  doSessionRouting() {
    let loggedIn = this.isLoggedIn();
    if(!loggedIn) {
      this.router.navigate(['login']);
    }
  }
}