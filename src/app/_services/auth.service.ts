import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICredential } from '../_interface/credential';
import { IToken } from '../_interface/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:8888/auth/login";

  constructor(private http:HttpClient) { }


  login(credentials:ICredential):Observable<IToken> {
    return this.http.post<IToken>(this.url, credentials)
  }
}
 