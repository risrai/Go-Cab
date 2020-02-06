import { Component, OnInit, ViewChild } from '@angular/core';
import { DriverModel} from 'src/app/model/DriverModel';
import { DriverService } from '../driver.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  driver= new DriverModel();
  driverObj:Object;
  httpClient:HttpClient;
  dataResponse: Object;

  @ViewChild('driverForm', { static: false }) form: any;
  toastr: any;
  
  constructor(private driverService :DriverService) { }

  ngOnInit() {
   
    
  }

  onDataReceived(data) {
    this.dataResponse = data;

  }


  onSubmit(){

    this.driverObj={"name":this.driver.name,"age":this.driver.age,"phoneNumber":this.driver.phoneNumber,
    "email":this.driver.email,"carType":this.driver.carType,"vehicleNo":this.driver.vehicleNo,
    "password":this.driver.password} ;

    this.driverService.doDriverRegistration(this.driverObj)
    .subscribe(
      data => {
        this.onDataReceived(data);
       
      },
      
    )
    
  }

}

