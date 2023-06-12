import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{


  product:any={};
  errorMessage:any;
 
  categoriesName:any=[]
  categorieid:any;
constructor(private ProductsService:ProductsService,private activatedRoute: ActivatedRoute, private router:Router , private http: HttpClient){}



ngOnInit(): void{
  this.ProductsService.getAllproducts().subscribe({
    next:(data:any)=>{
      this.product=data
      /* console.log(this.product) */
    },
    error:error=>this.errorMessage=error
  })

  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    this.categorieid=params.get("categorie")
    console.log("id"+this.categorieid) 


    this.http.get<any[]>(`https://dummyjson.com/products/category/${this.categorieid}`)
    .subscribe(categorieData => {
      this.categoriesName = categorieData;
       
});
})

  /*  */




}
        myFunction(){
            

        }
goToproductID(id:any){
  this.router.navigate(["/LazyLoading/Shop",id])
}


 



}
