import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';

@Injectable()
export class UsersService {
    constructor(private httpService: HttpService) {}

    register (user) {
      return this.httpService.post('auth/register', user);
    }

    login (user) {
      return this.httpService.post('auth/login', user);
    }

    profile (user) {
      return this.httpService.post('auth/profile', user, true)
    }
}
