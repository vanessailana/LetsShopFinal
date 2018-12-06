import { Component, OnInit } from '@angular/core';
import{Order}  from './order.model';
import{Router}  from '@angular/router';
import { CreateOrderService} from './create-order.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

private order:Order;
  constructor(private _orderService:CreateOrderService,private _rotuer:Router,public auth: AuthService) { }

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
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
 }else{
       this._orderService.updateOrder(this.order).subscribe((order)=>{
         console.log(order);

         this._rotuer.navigate(['']);


       },(error)=>{
         console.log(error);
       });
    }

    }

    }


