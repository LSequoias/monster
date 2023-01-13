import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  template: `
    <p>
      update works!
    </p>
  `,
  styles: [
  ]
})
export class UpdateComponent implements OnInit {

  constructor(private activated: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {console.log(data)}
    )
  }
}
