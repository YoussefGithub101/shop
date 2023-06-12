import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
/* import { ShopComponent } from './shop/shop.component'; */
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  /*   {path:'',component:RegistrationComponent}, */
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    
    {path:'LazyLoading',loadChildren:()=>import('./lazy-loading/lazy-loading.module').then(m=>m.LazyLoadingModule)},
    {path:'**' , component:PageNotFoundComponent}
/*     {path:'category',component:CategoryComponent},
    {path:'single-product',component:SingleProductComponent},
    {path:'**' , component:PageNotFoundComponent} */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
