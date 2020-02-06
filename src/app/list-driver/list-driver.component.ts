
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DriverModel } from '../model/DriverModel';
import { ListDriverService } from './list-driver.service';

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css']
})
export class ListDriverComponent implements OnInit {

  drivers: DriverModel[];

  constructor(private router: Router, private listDriverService: ListDriverService) { }

  ngOnInit() {
    this.listDriverService.getUsers()
      .subscribe( data => {
        this.drivers = data;
      });
  };
}
