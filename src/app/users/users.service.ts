import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}

  register (user) {
    return this.httpService.post('auth/register', user);
  }

  profile (user) {
      return this.httpService.post('auth/profile', user, true)
    }
  
  login (user) {
    return this.httpService.post('auth/login', user);
  }

  list (query?) {
    return this.httpService.get(`users/list${query}`);
  }

  like (id) {
    return this.httpService.post(`matches/like/${id}`, {});
  }

  dislike (id) {
    return this.httpService.post(`matches/unlike/${id}`, {});
  }
}
