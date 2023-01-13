import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './_utils/errors/errors.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./public/public.module')
    .then(module => module.PublicModule)
  },
  {
    path:'admin', loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule)
  },
  {
    path:'auth', loadChildren:() => import('./auth/auth.module')
    .then(m => m.AuthModule)
  },
  {
    //equal 404
    path:'**', component:ErrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
