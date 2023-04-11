import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  logar(email: string, senha: string): boolean {
    localStorage.setItem(
      'token',
      JSON.stringify({
        email,
      })
    );

    return true;
  }

  getToken(): any {
    const obj = localStorage.getItem('token');

    if (obj) {
      return JSON.parse(obj);
    }
    return null;
  }
}
