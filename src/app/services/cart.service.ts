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
  if(localStorage.getItem("myCart")===null){
    this.cartData=[];
  } else{
    this.cartData=localStorage.getItem("myCart")
    this.cartData=JSON.parse(this.cartData)
  }
}


  addToCart(id:any , data:any ,AlertAdd:string ,notAdded:string){

    this.test();
    const cart = data.filter((producta:any) =>producta.id === id);
    cart[0].Quantity =1
     const x:any = localStorage.getItem("myCart");
       const foundObject=JSON.parse(x)?.find((e:any) => e.id === id)
       if(foundObject){
        this.alertFunction(notAdded)
       }else{
        this.cartData.push(cart[0])
         localStorage.setItem('myCart', JSON.stringify(this.cartData))
         this.alertFunction(AlertAdd)
       }
   }




   getCart(){
    return this.cartData
   }


   alertFunction(Alert:string) {
    const alert1 = <HTMLInputElement> document.getElementById(Alert);
    console.log(alert1)
    alert1.className = "show";
    setTimeout(function(){ alert1.className = alert1.className.replace("show",""); }, 1000);
  }

}
