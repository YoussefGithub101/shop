import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { SearchProductsComponent } from './search-products/search-products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    SearchProductsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
    NgxPaginationModule
  ]
})
export class LazyLoadingModule { }
