import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../model/LoginModel';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  login= new LoginModel();
  constructor() { }

  ngOnInit() {
  }

}
