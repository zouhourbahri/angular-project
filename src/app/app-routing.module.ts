import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: "auth",
        pathMatch: "full",
      },
      {
        path: "auth",
        loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule), //lazyLoading
      },
      {
        path: "main",
        loadChildren: () => import("./main/main.module").then(m => m.MainModule), //lazyLoading
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
