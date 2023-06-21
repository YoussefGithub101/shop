import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  mycart:any=localStorage.getItem("myCart")
  totalPrice:number=0 
  Myarray:any=JSON.parse(this.mycart)
  
  
  constructor()
  {

  }


  finalInformation:FormGroup=new FormGroup(
    {
    Name:new FormControl(null,[Validators.required]),
    Email:new FormControl(null,[Validators.required,Validators.email]),
    Address:new FormControl(null,[Validators.required]),
    Phone:new FormControl(null,[Validators.required]),
   }
)

   
    getTotalPrice()
    {
      for(let p of this.Myarray)
      {
        this.totalPrice += p.price-(p.price *(p.discountPercentage/100));
      }
    }
   

  
 
  ngOnInit() { 
    this.getTotalPrice()
    
  }

  dub(finalInformation:FormGroup)
  {
       if(finalInformation.valid)
       {
         console.log(this.finalInformation)
       }
    
  }
  

 

}