import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartStorge:any=[];
  totalPrice:number=0 
  showDiv = true;
  cartData1:any[]
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private ProductsService:ProductsService){
    this.cartData1=ProductsService.cartData
    ProductsService.cartData=this.cartStorge
  }


  ngOnInit(): void {
    this.cartStorge=localStorage.getItem("myCart")
   this.cartStorge=JSON.parse(this.cartStorge)
   console.log(this.cartStorge?.length)
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
}
