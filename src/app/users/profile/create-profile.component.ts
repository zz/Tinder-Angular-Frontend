import { Component } from '@angular/core'
import { Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { UsersActions } from '../../store/users/users.actions';

import { ProfileModel } from './profile-user.model'

import { AuthService } from '../../core/auth.service';

@Component ({
    selector: 'create-profile',
    templateUrl: './create-profile.component.html'
})

export class CreateProfileComponent {
    user: ProfileModel = new ProfileModel()

    constructor (
      private ngRedux: NgRedux<IAppState>,
      private usersActions: UsersActions,
      private router: Router,
      private authService: AuthService
    ) {}

    createProfile () {
      this.usersActions.updateProfile(this.user)
      this.ngRedux
        .select(state => state.users)
        .subscribe(users => {
          if (users.userAuthenticated) {
            this.authService.saveUser(users.username);

            this.router.navigateByUrl('');
          }
        });
    }
}