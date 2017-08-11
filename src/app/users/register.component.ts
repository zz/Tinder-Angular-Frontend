import { Component } from '@angular/core';
import { RegisterUserModel } from './register-user.model';
import { Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

import { UsersActions } from '../store/users/users.actions';

@Component ({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
  user: RegisterUserModel = new RegisterUserModel();


  constructor(
    private userActions: UsersActions,
    private ngRedux: NgRedux<IAppState>,
    private router: Router
  ) {}
  register() {
    this.userActions.register(this.user);
    this.ngRedux
      .select(state => state.users.userRegistered)
      .subscribe(userRegistered => {
        if (userRegistered) {
          this.router.navigateByUrl('users/login');
        }
      })
  }
}