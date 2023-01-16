import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }
  
  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['admin']);
  }

  isLogin():boolean {
    const token = localStorage.getItem('token');
    // if dif de null
    return !!token;
  }
}
