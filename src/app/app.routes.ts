import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { HelpChatComponent } from './help-chat/help-chat.component';
import { ItemsFreqPurchasedComponent } from './items-freq-purchased/items-freq-purchased.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AislesComponent } from './aisles/aisles.component';
import { EditAisleComponent } from './aisles/edit-aisle/edit-aisle.component';
import { WhensBestTimeOrderComponent } from './whens-best-time-order/whens-best-time-order.component';
import { DeparmentsComponent } from './deparments/deparments.component';
import { EditDepartmentsComponent } from './deparments/edit-departments/edit-departments.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditDeleteProductComponent } from './edit-delete-product/edit-delete-product.component';
import { UpdateProductComponent } from './edit-delete-product/update-product/update-product.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreateOrderDetailsComponent } from './create-order-details/create-order-details.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },

{ path: 'updateproduct', component: UpdateProductComponent },

{ path: 'create-order-metadata', component: CreateOrderDetailsComponent},

  { path: 'callback', component: CallbackComponent },

  { path: 'profile', component: ProfileComponent },

  { path: 'create', component: CreateProductComponent },

  { path: 'update', component: EditDeleteProductComponent },

  { path: 'help', component: HelpChatComponent },

{ path: 'departments', component: DeparmentsComponent },

{ path: 'edit_departments', component: EditDepartmentsComponent },

{ path: 'best-time-order', component:WhensBestTimeOrderComponent },

{ path: 'create-order', component: CreateOrderComponent },
  { path: 'offered', component: ProductListComponent },
  { path: 'freq', component: ItemsFreqPurchasedComponent},
  { path: 'admin', component: AdminPortalComponent},
   { path: 'edit_aisle', component: EditAisleComponent},
    { path: 'aisles', component: AislesComponent},
  { path: '**', redirectTo: '' }
];
