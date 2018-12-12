
import {Headers, Response} from '@angular/http';
import{Router}  from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import{OrderDetail}  from '../OrderDetail.model';
import { CreateOrderDetailService } from '../create-order-detail.service';
@Component({
  selector: 'app-order-metadata',
  templateUrl: './order-metadata.component.html',
  styleUrls: ['./order-metadata.component.css']
})
export class OrderMetadataComponent implements OnInit {

  orders: OrderDetail[];
  order= new OrderDetail();
   totalRec : number;
  page: number = 1;


  constructor(private _orderdetailService:CreateOrderDetailService,private _rotuer:Router,public auth: AuthService) { }

  ngOnInit() {

  if(this.auth.isAuthenticated()==true) {



    this._orderdetailService.getAll()
      .subscribe( data => {
        this.orders = data;
      });
} else {
  this._rotuer.navigate(['']);
}

  };


   deleteOrder(orderdetail: OrderDetail): void {
    this._orderdetailService.deleteMetadata(orderdetail)
      .subscribe( data => {
        this.orders = this.orders.filter(u => u !== orderdetail);
      })
  };

  updateOrder(orderdetail: OrderDetail) {
    this._orderdetailService.setter(orderdetail);
     this._rotuer.navigate(['create-order-metadata']);
  }



   processForm(){

       this._orderdetailService.updateOrder(this.order).subscribe((order)=>{

         this._rotuer.navigate(['order_characteristics']);
       },(error)=>{
         console.log(error);
       });
    }

  private loadProd(){


    this
            ._orderdetailService
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
