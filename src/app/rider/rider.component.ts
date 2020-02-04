import { Component, OnInit } from '@angular/core';
import {RiderModel} from 'src/app/model/RiderModel';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {

  rider= new RiderModel();

  constructor() { }

  ngOnInit() {
  }

}
