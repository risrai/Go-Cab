import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../AuthenticationService/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-driver-screen',
  templateUrl: './driver-screen.component.html',
  styleUrls: ['./driver-screen.component.css']
})
export class DriverScreenComponent implements OnInit {

  token : string;
  name : string;

  constructor(private _auth: AuthenticationService) { }

  ngOnInit(): void {
    this.token = this._auth.getToken();
    const helper = new JwtHelperService();
    const tokenPayload = helper.decodeToken(this.token);
    this.name = tokenPayload.name;
    console.log(this.name);
  }

}
