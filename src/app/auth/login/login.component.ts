import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    'login.component.scss'
    ],
})
export class LoginComponent implements OnInit {

  form: any = {
    pseudo: null,
    psw:null
  }


  constructor() {

  }

  ngOnInit(): void {
    
  }

  public handleSubmit() : void {
    console.log(this.form)
  }


  /*get pseudo() :string|null {
    return this.form.pseudo;
  }

  get psw(): string|null {
    return this.form.psw;
  }*/
}
