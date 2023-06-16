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
 
  constructor(private activated:ActivatedRoute, private http: HttpClient,private ProductsService:ProductsService){}

  ngOnInit(): void {
      this.SingleProductID=this.activated.snapshot.paramMap.get('id')
      console.log(this.SingleProductID)
       this.getproductSID()
   }
 
   getproductSID(): void{
    this.ProductsService.getproductID(this.SingleProductID).subscribe({
      next:(data:any)=>{
        this.SingleProductdata=data
         
      },error:error=>this.errorMessage=error
    })

  }
  }

