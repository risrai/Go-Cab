import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentModel } from 'src/app/model/PaymentModel';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  bookingId: String;
  dataResponse: Object;
  firstDataResponse: Object;

  @ViewChild('paymentForm', { static: false }) form: any;
  public paymentModel = new PaymentModel();
  public hidden=true ;

  constructor(private payment: PaymentService) { }

  ngOnInit() {
  }

  onDataReceived(data) {
    this.dataResponse = data;
  }

  // onFirstDataReceived(data){
  //   this.firstDataResponse=data;
  //   this.bookingId=this.firstDataResponse["bookingId"];
  // }

  // onSubmit(){
  //   alert('Payment done successfully!');
  // }
  
  getFareTrip()
  {
    this.payment.getFareTrip()
    .subscribe(data=>{this.paymentModel=data;});
    this.hidden=false ;
  }
}
