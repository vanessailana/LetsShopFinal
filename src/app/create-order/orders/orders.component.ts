import{Order}  from '../order.model';
import { CreateOrderService } from '../create-order.service';
import {Headers, Response} from '@angular/http';
import{Router}  from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class  OrdersComponent implements OnInit {
  orders: Order[];
  order= new Order();
   totalRec : number;
  page: number = 1;


 constructor(private router: Router, private orderService:  CreateOrderService,public auth: AuthService) {

  }

  ngOnInit() {

  if(this.auth.isAuthenticated()==true) {



    this.orderService.getAll()
      .subscribe( data => {
        this.orders = data;
      });
} else {
  this.router.navigate(['']);
}

  };


   deleteOrder(order: Order): void {
    this.orderService.deleteOrder(order)
      .subscribe( data => {
        this.orders = this.orders.filter(u => u !== order);
      })
  };

  updateOrder(order: Order) {
    this.orderService.setter(order);
     this.router.navigate(['create-order-metadata']);
  }



   processForm(){

       this.orderService.updateOrder(this.order).subscribe((order)=>{

         this.router.navigate([' ']);
       },(error)=>{
         console.log(error);
       });
    }

  private loadProd(){


    this
            .orderService
            .getAll()
            .subscribe((resp: Response) => {
                this.orders = resp.json();
                this.totalRec = this.orders.length;
                console.log(this.totalRec);
                console.log(this.page);

                //console.log(JSON.stringify(resp.json()));
            })
  }

}
