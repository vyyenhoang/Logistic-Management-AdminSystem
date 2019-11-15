import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orders: any;
  constructor(private apiservice: apiService) { }
  // constructor(private router: Router) { }

  ngOnInit() {
    this.getorders();
  }


getorders() {

    this.apiservice.get('getorder').subscribe((res: any) => {

      this.orders = res.body.response;
    });
  }
}
