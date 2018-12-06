import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { CallbackComponent } from './callback/callback.component';

import { HelpChatComponent } from './help-chat/help-chat.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';

/** service providers*/
import { ProductsService } from './product-list/products.service';
import { CreateprodService } from './create-product/createprod.service';
import { AisleService } from './aisles/aisle.service';
import { DeleteProdService } from './edit-delete-product/delete-prod.service';
import { CreateOrderService } from './create-order/create-order.service';
import { CreateOrderDetailService } from './create-order-details/create-order-detail.service';


import { ItemsFreqPurchasedComponent } from './items-freq-purchased/items-freq-purchased.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AislesComponent } from './aisles/aisles.component';
import { EditAisleComponent } from './aisles/edit-aisle/edit-aisle.component';
import { WhensBestTimeOrderComponent } from './whens-best-time-order/whens-best-time-order.component';
import { DeparmentsComponent } from './deparments/deparments.component';
import { DepartmentsService } from './deparments/departments.service';
import { EditDepartmentsComponent } from './deparments/edit-departments/edit-departments.component';
import { ProfileComponent } from './profile/profile.component';

import { CreateProductComponent } from './create-product/create-product.component';
import { EditDeleteProductComponent } from './edit-delete-product/edit-delete-product.component';
import { UpdateProductComponent } from './edit-delete-product/update-product/update-product.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreateOrderDetailsComponent } from './create-order-details/create-order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    HelpChatComponent,
    ProductListComponent,
    ItemsFreqPurchasedComponent,
    AdminPortalComponent,
    AislesComponent,
    EditAisleComponent,
    WhensBestTimeOrderComponent,
    DeparmentsComponent,
    EditDepartmentsComponent,
    ProfileComponent,
    CreateProductComponent,
    EditDeleteProductComponent,
    UpdateProductComponent,
    OrdersComponent,
    CreateOrderComponent,
    CreateOrderDetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,NgxPaginationModule,
    HttpModule,HttpClientModule,Ng2SearchPipeModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService,ProductsService,AisleService, DepartmentsService,CreateprodService,DeleteProdService,CreateOrderService,CreateOrderDetailService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
