import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern } from '../../modeles/patterns';
import { CrudServiceService } from '../crud-service/crud-service.service';
import { Observable } from 'rxjs';
import { User } from '../../modeles/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private formBuilder:FormBuilder, private crudService:CrudServiceService) { }

  createLoginForm():FormGroup {
    return this.formBuilder.group({
      // email:new FormControl(null, [Validators.required, Validators.pattern(emailPattern)]),
      username:new FormControl(null, [Validators.required]),
      password:new FormControl(null, [Validators.required,Validators.maxLength(8),Validators.minLength(8)])
    })
  }
  login(body:User):Observable<any>{
    return this.crudService.addData('https://dummyjson.com/auth/login',body)
  }
}
