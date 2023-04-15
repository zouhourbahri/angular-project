import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsGuardGuard } from './../core/guards/posts-guard.guard';

const routes: Routes = [
  {
    path: '',
    component:MainComponent,
    children: [
      {
        path: '',
        redirectTo: "posts-list",
        pathMatch: "full",
      },
      {
        path: "posts-list",
        component:PostsListComponent,
        canActivate:[PostsGuardGuard]
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MainRoutingModule { }
