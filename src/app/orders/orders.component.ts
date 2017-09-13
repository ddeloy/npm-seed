import { Component, OnInit } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  cancelsDialog = true;
  rejectsDialog = false;
  showAppDialog() {
    this.rejectsDialog = true;
    this.cancelsDialog = false;
  }
  hideAppDialog() {
    this.rejectsDialog = false;
    this.cancelsDialog = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
