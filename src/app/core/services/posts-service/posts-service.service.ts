import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudServiceService } from '../crud-service/crud-service.service';
import { IPosts } from '../../modeles/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private crudService:CrudServiceService) { }
  getListPosts():Observable<IPosts[]> {
    return this.crudService.getData("https://jsonplaceholder.typicode.com/posts")
  }
}
