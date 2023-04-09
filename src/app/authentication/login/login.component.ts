import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  constructor(private authService:AuthenticationService) { }
  ngOnInit(): void {
  this.loginForm=this.authService.createLoginForm()
  }

  // getEmail():FormControl{
  //   return this.loginForm.get('email') as FormControl
  // }
  getPassword():FormControl{
    return this.loginForm.get('password') as FormControl
  }
  login(){
    if(this.loginForm.valid){
      console.log("this.loginForm",this.loginForm)
    }else {
      this.loginForm.markAllAsTouched()
      this.loginForm.markAsDirty()
    }
  }

}
