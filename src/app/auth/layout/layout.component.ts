import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class LayoutComponent {

}
