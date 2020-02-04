import { Component, OnInit } from '@angular/core';
import { DriverModel} from 'src/app/model/DriverModel';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  driver= new DriverModel();

  constructor() { }

  ngOnInit() {
  }

}
