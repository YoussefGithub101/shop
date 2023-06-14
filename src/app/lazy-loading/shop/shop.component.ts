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

  title='pagination'
 
  page:number=1;
  count:number=0;
  tableSize:number=6;
  tableSizes:any=[5,10,15,20];






  product:any={};
  errorMessage:any;
  uniqueItems:any;
  categories:any=[]
  

  constructor(private ProductsService:ProductsService,private activatedRoute: ActivatedRoute, public  router:Router , private http: HttpClient){ }

 
  ngOnInit(): void{
    this.getAllproduct()
 
    // get all categories
    this.http.get<any[]>(`https://dummyjson.com/products/categories`)
    .subscribe(categorie => {
      this.categories = categorie;
    });
    
  }


      getAllproduct(): void{
        this.ProductsService.getAllproducts().subscribe({
          next:(data:any)=>{
            this.product=data
             
          },error:error=>this.errorMessage=error
        })

      }
 
      goCategorie(categorie:any){
        this.router.navigate(["categorie/",categorie],{relativeTo:this.activatedRoute})
         
      }


      

      goToproductID(id:any){
        this.router.navigate(["/LazyLoading/Shop",id])
      }
      getAllCategories(){
        this.router.navigate(["/LazyLoading/Shop"])
         
      }

        onTableDataChange(event:any){
          this.page=event;
          this.getAllproduct();
        }
        onTableSizeChange(event:any){
          this.tableSize=event.target.value
          this.page=1;
          this.getAllproduct();
        }
      
}
