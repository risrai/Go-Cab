import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TransitModel } from '../model/TransitModel';
import { ListTransitService } from './list-transit.service';

@Component({
  selector: 'app-list-transit',
  templateUrl: './list-transit.component.html',
  styleUrls: ['./list-transit.component.css']
})
export class ListTransitComponent implements OnInit {

  transits: TransitModel[];

  constructor(private router: Router, private listTransitService: ListTransitService) { }

  ngOnInit() {this.listTransitService.getUsers()
    .subscribe( data => {
      this.transits = data;
    });
  };

}
