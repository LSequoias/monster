import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'', component:LayoutComponent, children:[
      {path: '', redirectTo: 'login', pathMatch:'full'},
      {path:'login', component:LoginComponent},
      {path:'logout', component:LogoutComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
