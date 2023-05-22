import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = environment.url;


  constructor(private http: HttpClient) {}

  async getProfile() {
          const options = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    };

      
    return await this.http.get(`${this.url}/api/profile/me`, options);
  }

    async login(userData: any) {
    return await this.http.post(`${this.url}/api/auth/login`, userData);
  }
}