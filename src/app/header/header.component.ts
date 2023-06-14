import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  inputValue: FormControl = new FormControl();
   
constructor(private ProductsService:ProductsService,private activatedRoute: ActivatedRoute, private  router:Router , private http: HttpClient){}


goCategorie(search:string){
  this.router.navigate(["LazyLoading/Shop/search/",search],{relativeTo:this.activatedRoute})
}



}
