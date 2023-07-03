import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  rating: number;

  SingleProductdata: any = [];

  SingleProductID: any;
  errorMessage: any;
  cartData1: any = [];
  product: any = []
  comments: any = []
  comment: any = ''
  constructor(private title: Title, private activated: ActivatedRoute, private http: HttpClient, private ProductsService: ProductsService, private CartService: CartService, private fb: FormBuilder, private _Router: Router) {
    this.cartData1 = ProductsService.cartData
  }

  ngOnInit(): void {
    this.title.setTitle('Proudct Ditails')
    this.SingleProductID = this.activated.snapshot.paramMap.get('id')
    console.log(this.SingleProductID)
    this.getproductSID()
  }

  getproductSID(): void {
    this.ProductsService.getproductID(this.SingleProductID).subscribe({
      next: (data: any) => {
        this.SingleProductdata = data
        this.product.push(data)


      }, error: error => this.errorMessage = error
    })

  }

  addToCart(id: any) {
    this.CartService.addToCart(id, this.product, "alertAdd", "alertNotadded")
  }

  formComment = new FormControl('')

  pushComment() {
    if (localStorage.getItem("data") != null) {
      if (this.formComment.valid) {
        this.comments.push(this.formComment.value)
        this.formComment.reset()
        Swal.fire("comment success!", "You added new comment", "success");
      } else {
        Swal.fire({
          icon: "error",
          title: 'must be between 5-50 letters',
        });
      }
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
  setRating(value: number) {
    if (localStorage.getItem("data") != null) {
      this.rating = value;
      Swal.fire("Rating success!", "You added new Rate", "success");
    }

    else {
      Swal.fire({
        title: "login Please...",
        icon: "error",
        customClass: { container: 'my-custom-shape-container' }
      });
    }
  }


}

