import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../customers.service';
import { Customer } from './../customers.model';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
  public customers: Customer[];
  public errorMessage: any;
  constructor(private customerService: CustomersService) { }

  ngOnInit() {
    this.getCustomers();
    console.log('Getting projects');
  }

  getCustomers() {
    this.customerService.getCustomers()
      .subscribe(
      customers => this.customers = customers,
      error => this.errorMessage = <any>error
      );
  }
}
