import { Injectable } from '@angular/core';
// import {CartItem} from "../interfaces/cart"
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData:any= [] ;
  totalQuantity:number;
  
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
         this.updateTotalQuantity()
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

  //update total price


/*   getTotalPrice(totalPrice:number){
    totalPrice=0
    for (const cartdata of this.cartData) {
      totalPrice += cartdata.price-(cartdata.price *(cartdata.discountPercentage/100));
    }
  }

  incrementQuantity(id:number,totalPrice:number){
    let Index = this.cartData.findIndex((item:any)=> item.id == id);
   if(this.cartData[Index].Quantity !==this.cartData[Index].stock){
     const price = this.cartData[Index].price 
     this.cartData[Index].Quantity ++;
     const Quantity = this.cartData[Index].Quantity
     this.cartData[Index].price = (price * Quantity)/(Quantity-1)  
     localStorage.setItem('myCart',JSON.stringify(this.cartData))
     this.getTotalPrice(totalPrice)
   }
  } */
  // Calculate and update the total quantity
   updateTotalQuantity() {
/*     this.totalQuantity=0
    for (const cartdata of this.cartData) {
      this.totalQuantity +=  cartdata.Quantity;
    } */
    this.test()
    this.totalQuantity  = this.cartData.reduce((acc:any, item:any) => acc + item.Quantity, 0);
  }
}
