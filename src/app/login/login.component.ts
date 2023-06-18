import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {



  error:string='';
  errors:string='';
 
  constructor(private _UserService:UserService , public _router:Router  )
  {
  
  }

  forms:FormGroup=new FormGroup(
    {
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    })

    login(forms:FormGroup)
     {
               
       
          if(forms.valid)
          {
            this._UserService.loginn(forms.value).subscribe((response)=>
            {
                  if(response.message == "success")
                  {
                        localStorage.setItem("data",response.data)
                        this._UserService.saveUserData()
                        this._router.navigate([''])
                  }
                  else if(response.message == "please signup")
                  {
                        this.error=response.message;
                  } 
                  else if (response.message == "wrong password")
                  {
                        this.errors=response.message;
                  }
            })
          }
     }

   

}
