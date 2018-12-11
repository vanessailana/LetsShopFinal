import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Product } from './product.model';
@Injectable()

export class ProductsService {
  product = new Product();
  baseUrl = 'https://limitless-fjord-5537.herokuapp.com/products';

  private baseUrl2 = 'http://localhost:8080/api/products/update/';

  private baseUrl3 = 'http://localhost:8080/api/createProduct';

   private baseUrl4 = 'http://localhost:8080/api/findproducts';

  constructor(private http: HttpClient) {

}

 getAll(): Observable<any> {



return this.http.get(baseUrl);



}

}
