import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartStorge:any=[];
  totalPrice:number=0 
  showDiv = true;
  cartData1:any=[]
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private ProductsService:ProductsService, private _Router:Router ,private CartService:CartService){
 /*    this.cartStorge=ProductsService.cartData */
    
    /* this.cartData1=ProductsService.cartData */
  }


  ngOnInit(): void {
    this.cartStorge=this.CartService.getCart()
  //   console.log(this.cartStorge)
  //  this.cartStorge=JSON.parse(this.cartStorge)
  //  console.log( this.cartStorge)
  
   this.getTotalPrice()

  //  for (const cartdata of this.cartStorge) {
  //   this.totalPrice += cartdata.price-(cartdata.price *(cartdata.discountPercentage/100));
  // }
  }
  removeCart(id:any){
  
    this.cartStorge = this.cartStorge.filter((producta:any) =>producta.id !== id);
    localStorage.setItem('myCart',JSON.stringify(this.cartStorge))
    this.totalPrice=0
    this.getTotalPrice()
    
  }
      getTotalPrice(){
        for (const cartdata of this.cartStorge) {
          this.totalPrice += cartdata.price-(cartdata.price *(cartdata.discountPercentage/100));
        }
      }

      isLogIn()
      {
        if(localStorage.getItem("data") != null )
        {
                 this._Router.navigate(["/checkOut"])
        }
        else{
          alert("plase SignIn")
          this._Router.navigate(["/register"])
        }
      }
}
