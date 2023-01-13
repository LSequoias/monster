import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '', component:LayoutComponent, children: [
      {path: '',  redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component:HomeComponent},
      {path: 'about', component:AboutComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
