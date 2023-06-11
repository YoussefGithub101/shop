import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {products} from "../interfaces/products"
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product={};
  _url='https://dummyjson.com/products';
 

  constructor(private http:HttpClient) { }


  getAllproducts():Observable<products[]>
  {
   //return this.employees;
   return this.http.get<products[]>(this._url).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Server error")
   }));
  }


 
}
