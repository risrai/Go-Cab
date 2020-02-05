import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../model/LoginModel';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../AuthenticationService/authentication.service';
import { HttpClientModule, HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  ldata : LoginModel;
  flag : any ;
  isProcessing : boolean = false;
  constructor(private _auth:AuthenticationService,
    private route: Router,
    private socialAuthService : AuthenticationService,
    private http:HttpClient) { 
    this.ldata = new LoginModel();
  }

  ngOnInit() {
    
  }

  onLogin(loginData: NgForm){
    this.isProcessing = true;
    //console.log(loginData.value);
    this._auth.login(this.ldata).subscribe(
      res=>{
          this.flag = res;
          if(this.flag){
            this.isProcessing = false;
            localStorage.setItem('token',this.flag.jwt);
            alert('Login Successful');
            //window.location.reload();
            setTimeout(()=>
              this.route.navigate(['transit']) 
            );
            
            
          }
          else{
            this.isProcessing = false;
            alert('Login Failed');
            loginData.reset();
          }
        } 
    );
       
  }
}
