import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['layout.component.scss']
})
export class LayoutComponent {

}
