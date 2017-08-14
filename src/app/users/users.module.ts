import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersService } from './users.service';
import { UsersActions } from '../store/users/users.actions';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateProfileComponent } from './profile/create-profile.component'
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import {
  MdListModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule
} from '@angular/material';

@NgModule ({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    RouterModule
  ],
  declarations: [
      RegisterComponent,
      LoginComponent,
      ProfileComponent,
      CreateProfileComponent
    ],
  providers: [
      UsersService,
      UsersActions
    ],
  imports: [
    FormsModule,
    CommonModule,
    RegisterComponent,
    LoginComponent,
    ListComponent
  ]
})

export class UsersModule {

}
