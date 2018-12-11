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


  constructor(private http: HttpClient) {

}

 getAll(): Observable<any> {



return this.http.get('https://limitless-fjord-55371.herokuapp.com/products');



}

}
