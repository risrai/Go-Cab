import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../AuthenticationService/authentication.service';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {

  constructor(private router: Router,public _auth:AuthenticationService) { }

  ngOnInit() {
  }

  logout(): void {
    this._auth.logout();
    this.router.navigate(['/login']);
}

}
