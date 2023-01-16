import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICredential } from 'src/app/_interface/credential';
import { IToken } from 'src/app/_interface/token';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    'login.component.scss'
    ],
})

export class LoginComponent implements OnInit {

  form: ICredential = {
    pseudo: '',
    psw:''
  }


  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {

  }

  ngOnInit(): void {
    
  }

  public handleSubmit() : void {
    this.authService.login(this.form).subscribe(
      (data: IToken) => { 
        console.log(data.access_token);
        localStorage.setItem('token', data.access_token);
        this.tokenService.saveToken(data.access_token);
      },
      (err:any) => console.log(err)
    );
  }

  /*get pseudo() :string|null {
    return this.form.pseudo;
  }

  get psw(): string|null {
    return this.form.psw;
  }*/
}
