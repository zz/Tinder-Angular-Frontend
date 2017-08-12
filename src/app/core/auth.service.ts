import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
   saveUser (user) {
    window.localStorage.setItem('user', user);
  }

   saveUserId (id) {
    window.localStorage.setItem('userId', id);
  }

   getUser () {
   return window.localStorage.getItem('user');
  }

   removeUser () {
    window.localStorage.removeItem('user');
  }

   authenticateUser (token) {
    window.localStorage.setItem('token', token);
  }

   isUserAuthenticated () {
    return window.localStorage.getItem('token') !== null;
  }

   deauthenticateUser () {
    window.localStorage.removeItem('token');
  }

   getToken () {
    return window.localStorage.getItem('token');
  }
}

