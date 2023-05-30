import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  async register(user: any) {
    return await this.http.post(`${this.url}/api/auth/register`, user);
  }

    async login(userData: any) {
    return await this.http.post(`${this.url}/api/auth/login`, userData);
  }
}
