import { Persona } from './../models/persona.model';
/* eslint-disable @typescript-eslint/no-explicit-any*/
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  loginUser(usuario: Auth): Observable<any> {
    const { email, password } = usuario;
    const url_login = 'http://localhost:3000/api/Users/login?include=user';
    return this.http
      .post<Auth>(
        url_login,
        { email, password },
        { headers: this.headers, withCredentials: true }
      )
      .pipe(map((data) => data));
  }

  getAllUsers() {
    const url_users = 'http://localhost:3000/api/Users';
    return this.http.get(url_users);
  }

  setUser(user: Persona): void {
    const user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
  }

  setToken(token: any): void {
    return localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getCurrentUser(): Persona {
    const user_string = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(user_string)) {
      const user: Persona = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    const token = localStorage.getItem('token');
    const url_logout = `http://localhost:3000/api/Users/logout?access_token=${token}`;
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    window.location.reload();
    return this.http.post<Auth>(url_logout, {
      headers: this.headers,
      withCredentials: true,
    });
  }

  statusLogin(token: string) {
    const url_status = `http://localhost:3000/api/status?token=${token}`;
    return this.http
      .post<any>(url_status, '', {
        headers: this.headers,
        withCredentials: true,
      })
      .toPromise()
      .then((res) => <any>res);
  }
}
