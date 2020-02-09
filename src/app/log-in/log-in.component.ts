import { Component, OnInit, ViewChild } from '@angular/core';
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
  showToast = false;
  isProcessing : boolean = false;
  successMsg : String = "Login successful";
  failureMsg : String = "Login failed. User not registered";
  dataResponse : object;
  submitted = false;

  @ViewChild('loginForm' , {static: false}) form: any;

  constructor(private _auth:AuthenticationService,
    private route: Router,
    private socialAuthService : AuthenticationService,
    private http:HttpClient) { 
    this.ldata = new LoginModel();
  }

  ngOnInit() {
    
  }

  onDataReceived(Msg : Object)
  {
   // data = this.successMsg;
    this.dataResponse = Msg;
    this.showToast = true;
  }

  onLogin(loginData: NgForm){
    this.isProcessing = true;
    this.submitted = true;
    //console.log(loginData.value);
    this._auth.login(this.ldata).subscribe(
      data=>{
        let successObj = {
          "success" : true,
          "message" : this.successMsg
        }
        this.onDataReceived(successObj);
        this.isProcessing = false;
        this.showToast = true;
         // this.flag = res;
         // if(this.flag){
            
            
            
            //alert('Login Successful');
            //window.location.reload();
            setTimeout(()=>
              this.route.navigate(['transit']) 
            );
            localStorage.setItem('token',this.flag.jwt);
          
        },  
          error=>{
            let errorObject = {
              "success" : false,
              "message" : this.failureMsg
            // this.isProcessing = false;
            // alert('Login Failed. User is not registered.');
            // loginData.reset();
          }
          this.onDataReceived(errorObject);
          this.isProcessing = false;
        }
    );
            
  
}

closeToast() {
  this.showToast = false;
  this.form.reset();
}
}
