import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent  implements OnInit{
   
  SingleProductdata:any=[];
  SingleProductID:any;
 
  constructor(private activated:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
      this.SingleProductID=this.activated.snapshot.paramMap.get('id')
      console.log(this.SingleProductID)
      this.loadComments();
   }
   loadComments() {
    this.http.get<any[]>(`https://dummyjson.com/products/${this.SingleProductID}`)
      .subscribe(SingleProduct => {
        this.SingleProductdata = SingleProduct;
      });
  }
  }

