import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit  {

  product:any={};
  errorMessage:any;
  uniqueItems:any;
  categories:any=[]
  toggle:boolean=true;

  constructor(private ProductsService:ProductsService,private activatedRoute: ActivatedRoute, private router:Router , private http: HttpClient){ }

 
 
  ngOnInit(): void{
     
    console.log("sadsadasd")
    this.ProductsService.getAllproducts().subscribe({
      next:(data:any)=>{
        this.product=data
         
      },
      error:error=>this.errorMessage=error
    })
    
    


    // get all categories
    this.http.get<any[]>(`https://dummyjson.com/products/categories`)
    .subscribe(categorie => {
      this.categories = categorie;
    });
    

/*     if (this.router.url=="/LazyLoading/Shop"){
      this.toggle=true;
      console.log("dasds")
    }
    console.log(this.toggle)
    console.log(this.router.url) */
  }

 
      goCategorie(categorie:any){
        this.router.navigate(["categorie/",categorie],{relativeTo:this.activatedRoute})
        this.toggle=false;
      }


      

      goToproductID(id:any){
        this.router.navigate(["/LazyLoading/Shop",id])
      }
      getAllCategories(){
        this.router.navigate(["/LazyLoading/Shop"])
        this.toggle=true;
      }

      
      
}
