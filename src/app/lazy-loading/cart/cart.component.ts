import { Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {
  cartStorge: any = [];
  totalPrice: number = 0
  showDiv = true;
  cartData1: any = []

  constructor(private title: Title, private elementRef: ElementRef, private renderer: Renderer2, private ProductsService: ProductsService, private _Router: Router, public CartService: CartService) {

  }


  ngOnInit(): void {
    this.title.setTitle('Cart')

    this.cartStorge = localStorage.getItem("myCart")
    this.cartStorge = JSON.parse(this.cartStorge)

    this.getTotalPrice()


  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cartStorge = this.CartService.getCart()
  }

  incrementQuantity(id: number) {
    let Index = this.cartStorge.findIndex((item: any) => item.id == id);
    if (this.cartStorge[Index].Quantity !== this.cartStorge[Index].stock) {
      const price = this.cartStorge[Index].price
      this.cartStorge[Index].Quantity++;
      const Quantity = this.cartStorge[Index].Quantity
      this.cartStorge[Index].price = (price * Quantity) / (Quantity - 1)
      localStorage.setItem('myCart', JSON.stringify(this.cartStorge))
      //update Total price
      this.getTotalPrice()
      //update cart icon count
      this.CartService.updateTotalQuantity()
    }
  }
  decreaseQuantity(id: number) {
    let Index = this.cartStorge.findIndex((item: any) => item.id == id);
    if (this.cartStorge[Index].Quantity !== 1) {
      const price = this.cartStorge[Index].price
      this.cartStorge[Index].Quantity--;
      const Quantity = this.cartStorge[Index].Quantity
      this.cartStorge[Index].price = (price * Quantity) / (Quantity + 1)
      localStorage.setItem('myCart', JSON.stringify(this.cartStorge))
      //update Total price
      this.getTotalPrice()
      //update cart icon count
      this.CartService.updateTotalQuantity()
    }
  }


  removeCart(id: any) {

    this.cartStorge = this.cartStorge.filter((producta: any) => producta.id !== id);
    localStorage.setItem('myCart', JSON.stringify(this.cartStorge))
    //update Total price
    this.getTotalPrice()
    //update cart icon count
    this.CartService.updateTotalQuantity()
  }
  getTotalPrice() {
    this.totalPrice = 0
    for (const cartdata of this.cartStorge) {
      this.totalPrice += cartdata.price - (cartdata.price * (cartdata.discountPercentage / 100));
    }
  }

  isLogIn() {
    if (localStorage.getItem("data") != null) {
      this._Router.navigate(["/checkOut"])
    }
    else {
      Swal.fire({
        title: "login...",
        icon: "error",
        customClass: {
          container: 'my-custom-shape-container'
        }
      });
      this._Router.navigate(["/login"])
    }
  }
}

