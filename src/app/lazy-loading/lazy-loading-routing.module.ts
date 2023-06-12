import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CategoriesComponent } from './categories/categories.component';
import { SingleProductComponent } from './single-product/single-product.component';
 

const routes: Routes = [
  {path:'Shop',component:ShopComponent ,
  children:[
    {path:'categorie/:categorie',component:CategoriesComponent}
  ]},

  {path:'Shop/:id',component:SingleProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
