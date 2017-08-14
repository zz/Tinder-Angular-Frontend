import { ProfileModel } from './profile-user.model';
import { Component, OnInit } from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { UsersActions } from '../../store/users/users.actions';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  private id: string;
  private profile: ProfileModel;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private usersActions: UsersActions,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.fetch();
    });

    this.ngRedux.select(state => state.users).subscribe(usersState => {
      this.profile = usersState.profile;
    });
  }

  fetch() {
    this.usersActions.getProfile(this.id);
  }
}
