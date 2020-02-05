import { Component, OnInit } from '@angular/core';
import { DriverModel} from 'src/app/model/DriverModel';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  driver= new DriverModel();
  driverObj:Object;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.driverObj={"name":this.driver.name,"age":this.driver.age,"phone"}
  }

}
name: string;
    age: string;
    phone_number: string;
    car_type: string;
    vehicle_no: string;
    exampleInputPassword1: string; 
}