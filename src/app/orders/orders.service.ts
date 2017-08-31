import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order} from './orders.model';
import 'rxjs/Rx';
@Injectable()
export class OrdersService {
  public ordersServiceUrl: string;
  constructor(private http: Http) {
    this.ordersServiceUrl = 'assets/data/orders/list.json';
  }

  getOrders(): Observable<Order[]> {
    console.log('Get Customers');
    return this.http.get(this.ordersServiceUrl)
      .map(this.extractOrderssData)
      .catch(this.handleError);

  }

  public extractOrderssData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
