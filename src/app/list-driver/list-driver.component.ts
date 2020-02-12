
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DriverModel } from '../model/DriverModel';
import { ListDriverService } from './list-driver.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css']
})
export class ListDriverComponent implements OnInit {

  drivers: DriverModel[];
  sortedDrivers: DriverModel[];
  p: number;

  ngOnInit() {
    this.listDriverService.getUsers()
      .subscribe( data => {
        this.drivers = data;
      });
  };

  constructor(private router: Router, private listDriverService: ListDriverService) {
    console.log(this.drivers);
    if (this.drivers)
      this.sortedDrivers = this.drivers.slice();
  }  

  sortDrivers(sort: Sort) {
    const data = this.drivers.slice();
    if (!sort.active || sort.direction === '') {
       this.sortedDrivers = data;
       return;
    }

    this.sortedDrivers = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
         case 'name': return compare(a.name, b.name, isAsc);
         case 'age': return compare(a.age, b.age, isAsc);
         case 'type': return compare(a.carType, b.carType, isAsc);
         default: return 0;
      } 
   });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
