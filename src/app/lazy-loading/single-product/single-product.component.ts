import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent  implements OnInit{
   
  SingleProductdata:any=[];
  
  SingleProductID:any;
  errorMessage: any;
  cartData1:any=[];
   
  constructor(private activated:ActivatedRoute, private http: HttpClient,private ProductsService:ProductsService){
    this.cartData1= ProductsService.cartData
  }

  ngOnInit(): void {
      this.SingleProductID=this.activated.snapshot.paramMap.get('id')
      console.log(this.SingleProductID)
       this.getproductSID()
   }
 
   getproductSID(): void{
    this.ProductsService.getproductID(this.SingleProductID).subscribe({
      next:(data:any)=>{
        this.SingleProductdata=data
         console.log(this.SingleProductdata)
         
         
      },error:error=>this.errorMessage=error
    })

  }
  addToCart(id:any){
    
    
    const x:any = localStorage.getItem("myCart");
      const foundObject=JSON.parse(x)?.find((e:any) => e.id === id)
      if(foundObject){
        console.log("this cart is already added")
        alert("this cart is already added");
      }else{
       this.cartData1.push(this.SingleProductdata)
        localStorage.setItem('myCart', JSON.stringify(this.cartData1))
        alert("cart added");
      }
   }
  
  }

