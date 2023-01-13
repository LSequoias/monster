import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [

    {path:'', redirectTo:'index', pathMatch: 'full'},
    {path: 'index', component:IndexComponent},
    {path: 'add', component:AddComponent},
    {path: 'update/:mid', component:UpdateComponent},
    {path: 'delete/:mid', component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterRoutingModule { }
