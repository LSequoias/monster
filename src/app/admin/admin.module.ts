import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    LayoutComponent,
    PanelControlComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
