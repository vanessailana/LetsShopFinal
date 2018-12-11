import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response,RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Product } from './product.model';
@Injectable()

export class DeleteProdService {
  private product = new Product();
  private baseUrl = 'https://floating-peak-75558.herokuapp.com/products';


  private baseUrl3 = 'https://floating-peak-75558.herokuapp.com/createProduct';


  constructor(private http: HttpClient) {
  }

 getAll(): Observable<any> {
    return this.http.get<Product[]>(this.baseUrl).catch(this.errorHandler);
  }

 createProduct(product:Product) {
    return this.http.post(this.baseUrl3,product).catch(this.errorHandler);
  }

 public deleteProduct(user) {
    return this.http.delete(this.baseUrl + "/"+ user.id);
  }

   updateProduct(product:Product){

   return this.http.put(this.baseUrl3,product).catch(this.errorHandler);

      }



 setter(product:Product){
     this.product=product;
   }

  getter(){
    return this.product;
  }
   errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
  }
}
