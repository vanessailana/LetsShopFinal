import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetail } from './OrderDetail.model';
import { Http, Response,RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class CreateOrderDetailService {

 private order = new OrderDetail();


 private baseUrl = 'https://floating-peak-75558.herokuapp.com/order_details';


  private baseUrl3 = 'https://floating-peak-75558.herokuapp.com/createOrderDetails';


  constructor(private http: HttpClient) {
  }



 createOrder(order:OrderDetail) {
    return this.http.post(this.baseUrl3,order).catch(this.errorHandler);
  }

  updateOrder(order:OrderDetail){

   return this.http.put(this.baseUrl3,order).catch(this.errorHandler);

      }
   getAll(): Observable<any> {
    return this.http.get<OrderDetail[]>(this.baseUrl);
  }



 setter(order:OrderDetail){
     this.order=order;
   }

 public deleteMetadata(user) {
    return this.http.delete(this.baseUrl + "/"+ user.id).catch(this.errorHandler);
  }

  getter(){
    return this.order;
  }
   errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
  }
}
