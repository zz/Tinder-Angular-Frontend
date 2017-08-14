import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/map';

const ROOT_PATH = 'http://localhost:5000/';

@Injectable()
export class HttpService {
  options;
  headers;

  constructor(private http: Http, private authService: AuthService) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  get(path) {
    this.applyAuthorizationHeader();
    return this.http.get(ROOT_PATH + path, this.options)
    .map(response => response.json());
  }

  post(path, data) {
    this.applyAuthorizationHeader();
    return this.http.post(ROOT_PATH + path, JSON.stringify(data), this.options)
      .map(response => response.json());
  }

  delete(path) {
    this.applyAuthorizationHeader();
    return this.http.delete(ROOT_PATH + path, this.options)
      .map(response => response.json());
  }

  applyAuthorizationHeader () {
    if (this.authService.isUserAuthenticated()) {
      this.headers.set('Authorization', `bearer ${this.authService.getToken()}`);
      return;
    }
    this.headers.set('Authorization', '');
  }
}
