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

  @ViewChild('paymentForm') form: any;
  paymentModel = new PaymentModel();

  constructor(private payment: PaymentService) { }

  ngOnInit() {
  }

  onDataReceived(data) {
    this.dataResponse = data;
  }

  onFirstDataReceived(data){
    this.firstDataResponse=data;
    this.bookingId=this.firstDataResponse["bookingId"];
  }

  /*onSubmit() {
    this.payment.getBookingId()
    .subscribe(
      data => {
        this.onFirstDataReceived(data);
        console.log("ondatareceived. Booking is:")
        console.log(this.firstDataResponse['bookingId']);
      },
      error => {
        let errorObject = {
          "success": false,
          "message": "Could not connect to server"
        }
        this.onDataReceived(errorObject);
      }
    );
    this.payment.getPayment(this.bookingId)
      .subscribe(
        data => {
          this.onDataReceived(data);
          console.log("ondatareceived. Price is:")
          console.log(this.dataResponse['totalPrice']);
        },
        error => {
          let errorObject = {
            "success": false,
            "message": "Could not connect to server"
          }
          this.onDataReceived(errorObject);
        }
      );
  }*/
}
