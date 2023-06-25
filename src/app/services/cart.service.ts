import { Injectable } from '@angular/core';
// import {CartItem} from "../interfaces/cart"
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData:any= [] ;
  
  constructor() { 
    this.test();
  }
  
 
test(){
  if(this.cartData==null){
    this.cartData=[];
  } else{
    this.cartData=localStorage.getItem("myCart")
    this.cartData=JSON.parse(this.cartData)
  }
}


  addToCart(id:any , data:any){

    this.test();

    const cart = data.filter((producta:any) =>producta.id === id);
    cart[0].Quantity =1
     const x:any = localStorage.getItem("myCart");
       const foundObject=JSON.parse(x)?.find((e:any) => e.id === id)
       if(foundObject){
         console.log("this cart is already added")
         alert("this cart is already added");
       }else{


        this.cartData.push(cart[0])
         localStorage.setItem('myCart', JSON.stringify(this.cartData))
         alert("cart added");
       }
   }
   getCart(){
    return this.cartData
   }
}
