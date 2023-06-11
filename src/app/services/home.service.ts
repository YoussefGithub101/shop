import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/offers';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  url:string="https://dummyjson.com/products";

  getProudcts():Observable<Iproduct[]>
  {
    return this.http.get<Iproduct[]>(this.url)
  }
}
