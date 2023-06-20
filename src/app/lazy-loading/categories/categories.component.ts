import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
import {Iproducts} from "src/app/interfaces/products"
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  page:number=1;
  count:number=0;
  tableSize:number=6;
  tableSizes:any=[5,10,15,20];

  product:any=[];
  errorMessage:any;
 
  categoriesName:any= [];
  categorieid:any;
  cartData1:any=[];
constructor(private ProductsService:ProductsService,private activatedRoute: ActivatedRoute, private router:Router , private http: HttpClient){
this.cartData1=ProductsService.cartData

}



ngOnInit(): void{

  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    this.categorieid=params.get("categorie")
    console.log(this.categorieid)

  this.ProductsService.getAllproducts().subscribe({
    next:(data:any)=>{
      this.product=data;
      this.getproductCate()
    },
    error:error=>this.errorMessage=error
  })

 
})

}
 
 

goToproductID(id:any){
  this.router.navigate(["/LazyLoading/Shop",id])
}
getproductCate(){

  this.categoriesName = this.product.filter((producta:any) =>producta.category == this.categorieid);
  
  
}

onTableDataChange(event:any){
  this.page=event;
  this.getproductCate();
}
 

addToCart(id:any){
  const cart = this.product.filter((producta:any) =>producta.id === id);
   const x:any = localStorage.getItem("myCart");
     const foundObject=JSON.parse(x)?.find((e:any) => e.id === id)
     if(foundObject){
      console.log("this cart is already added")
      alert("this cart is already added");
     }else{
       this.cartData1.push(cart[0])
       localStorage.setItem('myCart', JSON.stringify(this.cartData1))
       alert("cart added");
     }
 }

}
