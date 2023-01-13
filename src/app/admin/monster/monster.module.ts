import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonsterRoutingModule } from './monster-routing.module';
import { IndexComponent } from './index/index.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    IndexComponent,
    UpdateComponent,
    DeleteComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    MonsterRoutingModule
  ]
})
export class MonsterModule { }
