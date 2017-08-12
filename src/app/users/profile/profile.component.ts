import { Component, OnInit } from '@angular/core'

import { NgRedux } from 'ng2-redux'
import { IAppState } from '../../store';
import { UsersActions } from '../../store/users/users.actions';

import { ActivatedRoute } from '@angular/router'

@Component ({
    selector: 'profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    constructor (
        private ngRedux: NgRedux<IAppState>,
        private usersActions: UsersActions,
        private route: ActivatedRoute
    ) {}

    ngOnInit () {
      this.route.params
        .subscribe(params => {
            const id = params['id']

        })
    }

    createProfile () {
      
    }
}