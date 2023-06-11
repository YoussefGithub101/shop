import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from '../shop/shop.component';
import { SingleProductComponent } from '../single-product/single-product.component';

const routes: Routes = [
  {path:'Shop',component:ShopComponent},
  {path:'Shop/:id',component:SingleProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
