import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
/* import { FormControl } from '@angular/forms'; */
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /* inputValue: FormControl = new FormControl(); */
  islogin:boolean=false;
constructor(public _userService : UserService,private ProductsService:ProductsService,private activatedRoute: ActivatedRoute, private  router:Router , private http: HttpClient){}


goCategorie(search:string){
  this.router.navigate(["LazyLoading/Shop/search/",search],{relativeTo:this.activatedRoute})
}

ngOnInit(): void 
{
  
   this._userService.userData.subscribe(()=>
   {
     if(this._userService.userData.getValue() != null)
     {
       this.islogin=true;
     }
     else
     {
       this.islogin=false;
     }
   })

}



logOut()
{
 this._userService.logOut()
}

}
