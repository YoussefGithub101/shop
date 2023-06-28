import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { SearchProductsComponent } from './search-products/search-products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  declarations: [
    SearchProductsComponent,
    CartComponent,
    CheckOutComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LazyLoadingModule { }
