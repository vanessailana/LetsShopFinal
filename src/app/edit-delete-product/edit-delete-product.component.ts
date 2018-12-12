import{Product}  from './product.model';
import { DeleteProdService } from './delete-prod.service';
import {Headers, Response} from '@angular/http';
import{Router}  from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'edit-delete-product',
  templateUrl: './edit-delete-product.component.html',
  styleUrls: ['./edit-delete-product.component.css']
})
export class  EditDeleteProductComponent implements OnInit {
  products: Product[];
  product= new Product();
   totalRec : number;
  page: number = 1;


  constructor(private router: Router, private productService:  DeleteProdService,public auth: AuthService) {

  }

  ngOnInit() {

  if(this.auth.isAuthenticated()==true) {



    this.productService.getAll()
      .subscribe( data => {
        this.products = data;
      });
} else {
  this.router.navigate(['offered']);
}

  };


   deleteProduct(product: Product): void {
    this.productService.deleteProduct(product)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };

  editProductPage(product: Product) {
    this.productService.setter(product);
     this.router.navigate(['/order-metadata']);
  }



   processForm(){

       this.productService.updateProduct(this.product).subscribe((product)=>{

         this.router.navigate(['/offered']);
       },(error)=>{
         console.log(error);
       });
    }

  private loadProd(){


    this
            .productService
            .getAll()
            .subscribe((resp: Response) => {
                this.products = resp.json();
                this.totalRec = this.products.length;
                console.log(this.totalRec);
                console.log(this.page);

                //console.log(JSON.stringify(resp.json()));
            })
  }

}
