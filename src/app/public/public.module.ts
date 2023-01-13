import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    AboutComponent,
    NavigationComponent,

  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  providers: [],
})
export class PublicModule { }
