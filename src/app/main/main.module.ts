import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    MainComponent,
    PostsListComponent,
    NavBarComponent

  ],
  imports: [
    CommonModule,
    MainRoutingModule,SharedModule,ReactiveFormsModule,
    FormsModule,LayoutModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
