import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import{Product}  from '../product.model';
 import{Router}  from '@angular/router';
import { DeleteProdService } from '../delete-prod.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {


private product:Product;
  constructor(private _prodService:DeleteProdService,private _rotuer:Router,public auth: AuthService) { }

  ngOnInit() {
if(this.auth.isAuthenticated()==true) {


    this.product=this._prodService.getter();
  }
  else {
  this._rotuer.navigate(['']);
  }
  }


    processForm(){

       this._prodService.updateProduct(this.product).subscribe((product)=>{
         console.log(product);

         this._rotuer.navigate(['/update']);
       },(error)=>{
         console.log(error);
       });
    }



    }

