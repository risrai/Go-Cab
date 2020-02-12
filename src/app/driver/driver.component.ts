import { Component, OnInit, ViewChild } from '@angular/core';
import { DriverModel} from 'src/app/model/DriverModel';
import { DriverService } from '../driver.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  isProcessing : boolean = false;
  showToast = false;

  @ViewChild('driverForm' , {static: false}) form: any;
  toastr: any;

  constructor(private driverService :DriverService,private router : Router) { }

  ngOnInit() {


  }

  onDataReceived(data: Object) {
    this.dataResponse = data;
    this.showToast = true;
  }


  onSubmit(){

    this.driverObj={"name":this.driver.name,"age":this.driver.age,"phoneNumber":this.driver.phoneNumber,
    "email":this.driver.email,"carType":this.driver.carType,"carNumber":this.driver.carNumber,
    "password":this.driver.password} ;
    this.isProcessing = true;
    this.driverService.doDriverRegistration(this.driverObj)
    .subscribe(
      data => {
        this.isProcessing = false;
        this.onDataReceived(data);
        //this.router.navigate(['login']);
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
    //this.router.navigate(['login']);
  }

  closeToast() {
    this.showToast = false;
    this.router.navigate(['login']);
    //this.form.reset();
  }

}
