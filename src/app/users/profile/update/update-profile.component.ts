import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../../store';
import { UsersActions } from '../../../store/users/users.actions';

import { ProfileModel } from '../profile-user.model';

import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'update-profile',
  templateUrl: './update-profile.component.html'
})
export class UpdateProfileComponent implements OnInit {
  user: ProfileModel;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private usersActions: UsersActions,
    private router: Router
  ) {}

  ngOnInit() {
    this.usersActions.getProfile();
    this.ngRedux.select(state => state.users).subscribe(users => {
      this.user = users.profile;
    });
  }

  update() {
    this.usersActions.updateProfile(this.user).subscribe(result => {
      if (result.success) {
        this.router.navigate(['/users/profile']);
      } else {
        console.error(result.message);
      }
    });
  }
}
