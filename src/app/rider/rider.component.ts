import { Component, OnInit, ViewChild } from '@angular/core';
import { RiderModel } from 'src/app/model/RiderModel';
import { RiderService } from '../rider.service';
import { HttpClient } from '@angular/common/http';

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

  @ViewChild('riderForm', { static: false }) form: any;
  toastr: any;

  constructor(private riderService:RiderService) { }

  ngOnInit() {
  }

  onDataReceived(data) {
    this.dataResponse = data;

  }

  onSubmit(){
   this.riderObj={"name":this.rider.name,"phoneNumber":this.rider.phoneNumber,"email":this.rider.email,
  "city":this.rider.city,"zipcode":this.rider.zipcode,"password":this.rider.password} ;

  this.riderService.doRiderRegistration(this.riderObj)
  .subscribe(
    data => {this.onDataReceived(data);
    },
     )

  }

  
}


