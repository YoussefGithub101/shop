import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
declare var paypal:any;
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  @ViewChild('paymentRef',{static:true})  paymentRef!:ElementRef;

  mycart:any=localStorage.getItem("myCart");
  totalPrice:number=0 ;

  Myarray:any=JSON.parse(this.mycart);
  constructor() { }
  ngOnInit() { 
    
    this.getTotalPrice()
    paypal.Buttons({
      style:
      {
        layout:'horizontal',
        color:'gold',
        shape:'pill', //rect
        label:'paypal',
        tagline :false
      },
      createOrder:(data:any, actions:any)=>
      {
        return actions.order.create({
          purchase_units:[
            {
              amount:{value:this.totalPrice.toFixed(2),currency_code:'USD'},
            },
          ]
        })
      },
      onApprove:(data:any,actions:any)=>
      {
        return actions.order.get().then((Daitails:any)=>{
          let result= Object.assign({},Daitails,{clientData:this.finalInformation.value})
          console.log(result)
          Swal.fire("Payment success!", "Your payment has been processed successfully.", "success");
        })
      },onError:((error:any)=>
      {
        Swal.fire(error, "You clicked the button!", "success");
      })
    }).render(this.paymentRef.nativeElement)
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
  dub(finalInformation:FormGroup)
  {
       if(finalInformation.valid)
       {
         console.log(this.finalInformation)
       }
  }
}
