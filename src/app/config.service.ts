import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpClient: HttpClient) { }

  getPostsList() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  getResult(data: object) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
