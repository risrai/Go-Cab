import { Component, OnInit, ViewChild } from '@angular/core';
import { RiderModel } from 'src/app/model/RiderModel';
import { RiderService } from '../rider.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {

  rider= new RiderModel();
  riderObj:Object;
  httpClient:HttpClient;
  dataResponse: Object;
  isProcessing : boolean = false;
  showToast = false;

  @ViewChild('riderForm') form: any;
  toastr: any;

  constructor(private riderService:RiderService,private router : Router) { }

  ngOnInit() {
  }

  onDataReceived(data) {
    this.dataResponse = data;
    this.showToast = true;
  }

  onSubmit(){
   this.riderObj={"name":this.rider.name,"phoneNumber":this.rider.phoneNumber,"email":this.rider.email,
  "city":this.rider.city,"zipcode":this.rider.zipcode,"password":this.rider.password} ;
   // console.log(this.riderObj);
   this.isProcessing = true;
  this.riderService.doRiderRegistration(this.riderObj)
  .subscribe(
    data => {
      this.isProcessing = false;
      this.onDataReceived(data);
    },
    error=>{
      let errorObject = {
        "success" : false,
        "message" : "Could not connect to server"
      }
      this.onDataReceived(errorObject);
      this.isProcessing = false;
    }
     )
     

  }
  closeToast() {
    this.showToast = false;
    this.router.navigate(['login']);
    //this.form.reset();
  }

  
}


