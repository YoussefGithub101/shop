import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit  {

  product:any={};
  errorMessage:any;
  uniqueItems:any;
  categories:any=[]
  constructor(private ProductsService:ProductsService, private router:Router , private http: HttpClient){ }

 
 

  ngOnInit(): void{
    this.ProductsService.getAllproducts().subscribe({
      next:(data:any)=>{
        this.product=data
        /* console.log(this.product) */
        this.uniqueItems =[...new Set(this.product.products)]
        console.log(this.uniqueItems)
      },
      error:error=>this.errorMessage=error
    })


    // get all categories
    this.http.get<any[]>(`https://dummyjson.com/products/categories`)
    .subscribe(categorie => {
      this.categories = categorie;
    });


  }

  goToproductID(id:any){
    this.router.navigate(["/LazyLoading/Shop",id])
}

/*   goTocomponents(id:any){
           this.router.navigate(["/PostsComponent",id])
      } */
              
      
}
