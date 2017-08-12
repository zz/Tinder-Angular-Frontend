import { Component } from '@angular/core'

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { UsersActions } from '../../store/users/users.actions';

import { ProfileModel } from './profile-user.model'

@Component ({
    selector: 'create-profile',
    templateUrl: './create-profile.component.html'
})

export class CreateProfileComponent {
    user: ProfileModel = new ProfileModel()

    constructor (
      private ngRedux: NgRedux<IAppState>,
      private usersActions: UsersActions
    ) {}

    createProfile () {
      this.usersActions.updateProfile(this.user)
      this.ngRedux
        .select(state => state.users.profileCreated)
        .subscribe(profileCreated => {
            
        })
    }
}