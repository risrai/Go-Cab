
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { DriverModel } from '../model/DriverModel';
import { ListDriverService } from './list-driver.service';
import { ToastrService } from 'ngx-toastr';  
import {Sort} from '@angular/material';

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css']
})
export class ListDriverComponent implements OnInit {

  drivers: DriverModel[];
  sortedDrivers: DriverModel[];
  public searchText : string;
  p: number;

  constructor(private router: Router, private listDriverService: ListDriverService, 
    private toastr: ToastrService, private renderer2: Renderer2) {
  }  

  ngOnInit() {
    this.listDriverService.getDrivers()
      .subscribe( data => {
        this.drivers = data;
        this.sortedDrivers = data;
      });
  };

  deleteDriver(driver: DriverModel, index): void {
    this.listDriverService.deleteDriver(driver)
      .subscribe( data => {
        this.drivers = this.drivers.filter(u => u !== driver);
        this.toastr.error("Driver Removed !");
        this.sortedDrivers.splice(index, 1);
      })
  };

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
