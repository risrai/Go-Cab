import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './AuthenticationService/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Go-Cab';
  //flag:boolean = false;
  constructor(private _auth:AuthenticationService,private route:Router){}

  ngOnInit(){
    this._auth.doSessionRouting();
   
  }

 
}
