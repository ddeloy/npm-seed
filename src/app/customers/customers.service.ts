import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer} from './customers.model';
import 'rxjs/Rx';
@Injectable()
export class CustomersService {
  customersServiceUrl: string;
  constructor(private http: Http) {
    this.customersServiceUrl = 'assets/data/customers/list.json';
  }

  getCustomers(): Observable<Customer[]> {
    console.log('Get Customers');
    return this.http.get(this.customersServiceUrl)
      .map(this.extractCustomersData)
      .catch(this.handleError);

  }

  private extractCustomersData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
