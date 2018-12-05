mport { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';
import { Http, Response,RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class CreateOrderService {

 private order= new Order();


  private baseUrl3 = 'http://localhost:8080/api/createOrder';


  constructor(private http: HttpClient) {
  }


 createOrder(product:Product) {
    return this.http.post(this.baseUrl3,product).catch(this.errorHandler);
  }




 setter(order:Order){
     this.order=order;
   }

  getter(){
    return this.order;
  }
   errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
  }
}
