import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {

  constructor() { }
  ajoutPost = new BehaviorSubject<boolean>(false)
  setAjoutPost(value:boolean ){
    this.ajoutPost.next(value)
  }   
  getAjoutPost():Observable<boolean> {
    return this.ajoutPost.asObservable()
  }
}
