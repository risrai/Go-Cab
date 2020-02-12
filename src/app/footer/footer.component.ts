import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showToast = false;

  constructor() { }

  ngOnInit() {
  }

  feed()
  {
     alert('Feedback registered successfully!');
  }


}
