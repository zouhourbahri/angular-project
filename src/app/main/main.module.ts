import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,SharedModule,ReactiveFormsModule,
    FormsModule,
  ]
})
export class MainModule { }
