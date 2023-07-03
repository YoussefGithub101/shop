import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
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


  toggle:boolean=false;



  product:any=[];
  errorMessage:any;
  uniqueItems:any;
  categories:any=[]

  cartData1:any=[];
  constructor(private elementRef: ElementRef, private renderer: Renderer2,private ProductsService:ProductsService,private activatedRoute: ActivatedRoute, public  router:Router , private http: HttpClient ,private CartService:CartService){
    this.cartData1= ProductsService.cartData;

  }


  ngOnInit(): void{




    this.getAllproduct()



  }


      getAllproduct(): void{
        this.ProductsService.getAllproducts().subscribe({
          next:(data:any)=>{
            this.product=data


            this.categories= Array.from(new Set(this.product.map((product: any) => product.category)));


          },error:error=>this.errorMessage=error
        })

      }


      // addToCart(id:any){
      //  const cart = this.product.filter((producta:any) =>producta.id === id);
      //   const x:any = localStorage.getItem("myCart");
      //     const foundObject=JSON.parse(x)?.find((e:any) => e.id === id)
      //     if(foundObject){
      //       console.log("this cart is already added")
      //       alert("this cart is already added");
      //     }else{
      //      this.cartData1.push(cart[0])
      //       localStorage.setItem('myCart', JSON.stringify(this.cartData1))
      //       alert("cart added");
      //     }
      // }
      addToCart(id:any){
        this.CartService.addToCart(id,this.product,"alertAdd","alertNotadded")
      }



      goCategorie(categorie:any){
        this.router.navigate(["categorie/",categorie],{relativeTo:this.activatedRoute})

      }




      goToproductID(id:any){
        this.router.navigate(["/store/Shop",id])
      }
      getAllCategories(){
        this.router.navigate(["/LazyLoading/Shop"])

      }

        onTableDataChange(event:any){
          this.page=event;
          this.getAllproduct();
        }





        toggleSidebar() {
          this.toggle=!this.toggle;
          const sidebar = this.elementRef.nativeElement.querySelector('#sidebar');
          if (this.toggle){
            this.renderer.addClass(sidebar, 'active');
          }
          else {this.renderer.removeClass(sidebar, 'active');}
          console.log('Work');
        }


}
