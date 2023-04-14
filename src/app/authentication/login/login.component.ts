import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  constructor(private authService:AuthenticationService,private router:Router) { }
  ngOnInit(): void {
  this.loginForm=this.authService.createLoginForm()
  }

  // getEmail():FormControl{
  //   return this.loginForm.get('email') as FormControl
  // }
  // getPassword():FormControl{
  //   return this.loginForm.get('password') as FormControl
  // }
  login(){
    console.log("this.loginForm",this.loginForm)
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).pipe().subscribe({
        next:(responseLogin)=>{
          console.log('responseLogin',responseLogin)
          alert(`Welcome ${responseLogin.firstName}`);
          this.router.navigate(['main'])
          localStorage.setItem('token',JSON.stringify({token:responseLogin.token,id:responseLogin.id}))
        },
        error:(err)=>{
          console.log('err',err)
          alert(`${err.error.message}`);

        }
      })
    }else {
      this.loginForm.markAllAsTouched()
      this.loginForm.markAsDirty()
    }
  }

}
