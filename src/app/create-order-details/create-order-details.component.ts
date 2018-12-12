import { Component, OnInit } from '@angular/core';
import{OrderDetail}  from './OrderDetail.model';
import{Router}  from '@angular/router';
import { CreateOrderDetailService} from './create-order-detail.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-order-details',
  templateUrl: './create-order-details.component.html',
  styleUrls: ['./create-order-details.component.css']
})
export class CreateOrderDetailsComponent implements OnInit {

 order:OrderDetail;
  constructor(private _orderService:CreateOrderDetailService,private _rotuer:Router,public auth: AuthService) { }

  ngOnInit() {

if(this.auth.isAuthenticated()==true) {

    this.order=this._orderService.getter();
} else {

  this._rotuer.navigate(['']);

}

  }

    processForm(){
    if(this.order.id==undefined){
       this._orderService.createOrder(this.order).subscribe((order)=>{
         console.log(order);
         this._rotuer.navigate([' ']);
       },(error)=>{
         console.log(error);
       });
 }else{
       this._orderService.updateOrder(this.order).subscribe((order)=>{
         console.log(order);

         this._rotuer.navigate(['order_characteristics']);


       },(error)=>{
         console.log(error);
       });
    }

    }

    }


