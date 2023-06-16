import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit{
  title='pagination'
 
  page:number=1;
  count:number=0;
  tableSize:number=6;
  tableSizes:any=[5,10,15,20];


  SearchID:any;
  Searchdata:any=[]
  errorMessage: any;
  constructor(private ProductsService:ProductsService,private activatedRoute: ActivatedRoute, private router:Router , private http: HttpClient){}



  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    this.SearchID=params.get("searchProduct")
    console.log(this.SearchID) 
    this.getproduct()
   })

  
}
getproduct(){
  this.ProductsService.getproductSearch(this.SearchID).subscribe({
    next:(data:any)=>{
      this.Searchdata=data
       console.log(this.Searchdata)
       
    },error:error=>this.errorMessage=error
  })
}


goToproductID(id:any){
  this.router.navigate(["/LazyLoading/Shop",id])
}


onTableDataChange(event:any){
  this.page=event;
  this.getproduct();
}
 

}