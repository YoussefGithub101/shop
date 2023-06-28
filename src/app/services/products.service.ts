import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Iproducts} from "../interfaces/products"
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartData:Iproducts[]=[];
  product=[];
  _url='https://store-5hap.onrender.com/product';
  
make(token:any):Observable<any>
{
  const url=`https://store-5hap.onrender.com/create-payment-intent`
  return this.http.post(url,{token})

}
  constructor(private http:HttpClient) { }


  getAllproducts():Observable<Iproducts[]>
  {
    
   return this.http.get<Iproducts[]>(this._url).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Server error")
   }));
  }





  getproductID(SingleProductID:number):Observable<Iproducts[]>
  {
   
   return this.http.get<Iproducts[]>(`https://store-5hap.onrender.com/product/${SingleProductID}`).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Server error")
   }));
  }



 
  getproductSearch (SearchID:string):Observable<Iproducts[]>
  {
   
   return this.http.get<Iproducts[]>(`https://store-5hap.onrender.com/search?q=${SearchID}`).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Server error")
   }));
  }



 

}
