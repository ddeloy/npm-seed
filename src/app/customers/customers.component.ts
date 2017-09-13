import { Component, OnInit } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [ `
    .bigitem {
      /* This will be twice as big as the small item. */
      -webkit-flex: 2 0 0;
      flex: 2 0 0;
    }
    .smallitem {
      -webkit-flex: 1 0 0;
      flex: 1 0 0;
    }`]
})
export class CustomersComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
