import { Component, OnInit } from '@angular/core';
import{Product}  from './product.model';
import{Router}  from '@angular/router';
import { CreateprodService} from './createprod.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

private product:Product;
  constructor(private _productService:CreateprodService,private _rotuer:Router,public auth: AuthService) { }

  ngOnInit() {

if(this.auth.isAuthenticated()==true) {

    this.product=this._productService.getter();
} else {
  this._rotuer.navigate(['']);
}

  }

    processForm(){
    if(this.product.id==undefined){
       this._productService.createProduct(this.product).subscribe((product)=>{
         console.log(product);
         alert("Product has just been added")
         this._rotuer.navigate(['/offered']);
       },(error)=>{
         console.log(error);
       });
 }else{
       this._productService.updateProduct(this.product).subscribe((product)=>{
         console.log(product);
         alert("product has just been update");
         this._rotuer.navigate(['/update']);
       },(error)=>{
         console.log(error);
       });
    }

    }

    }




