import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginModel } from '../model/LoginModel';
//import { RegisterUser } from '../model/registeruser';
import { Observable } from 'rxjs';
import { UserModel } from '../model/UserModel';
import { Router } from '@angular/router';
import { AuthResponseModel } from '../model/AuthResponseModel';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  
  private url = "http://localhost:8762/api";
  options: any;
  flag:any;
  //authResponse : any;
  

  constructor(private http:HttpClient,private router : Router) { }

  getAllUsers() : Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.url+"/list");
  }

  login(loginData: LoginModel) {

    this.options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<any>(this.url+"/signin",JSON.stringify(loginData),this.options)
    .pipe(
      map(authResponse=>{
        if(authResponse){
      // store user details and jwt token in the local storage to keep the user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(authResponse));
      }
      return authResponse;
    })
    );
   // throw new Error("Method not implemented.");
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  isLoggedIn() {
    
    return !!localStorage.getItem('currentUser');
  }

  getToken():string {
    return localStorage.getItem('currentUser');
  }

  doSessionRouting() {
    let loggedIn = this.isLoggedIn();
    if(!loggedIn) {
      this.router.navigate(['login']);
    }
  }
}