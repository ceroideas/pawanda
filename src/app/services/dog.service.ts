import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DogService {
  url = environment.url;

  options = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  constructor(private http: HttpClient) {}

  async registerDog(dog: any) {
    return await this.http.post(`${this.url}/api/dogs`, dog, this.options);
  }

  async getDogs() {
    return await this.http.get(`${this.url}/api/dogs/me`, this.options);
  }

  async getDog(id: number) {
    return await this.http.get(`${this.url}/api/dogs/${id}`, this.options);
  }

  async updateDog(id: number, dog: any) {
    return await this.http.patch(
      `${this.url}/api/dogs/${id}`,
      dog,
      this.options
    );
  }

  async deleteDog(id: number) {
    return await this.http.delete(`${this.url}/api/dogs/${id}`, this.options);
  }

  async getRaces() {
    return await this.http.get('https://api.thedogapi.com/v1/breeds');
  }
}
