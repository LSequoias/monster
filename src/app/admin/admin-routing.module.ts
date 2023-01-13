import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PanelControlComponent } from './panel-control/panel-control.component';

const routes: Routes = [
  {
    path:'', component:LayoutComponent, children: [
      { path:'', redirectTo: 'panel-control', pathMatch:'full' },
      { path:'panel-control', component:PanelControlComponent },
      {
        path:'monster', loadChildren: () => import('./monster/monster.module')
        .then(m => m.MonsterModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
