import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersService } from './users.service';
import { UsersActions } from '../store/users/users.actions';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateProfileComponent } from './profile/create-profile.component'
import { ProfileComponent } from './profile/profile.component';

@NgModule ({
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
    CommonModule
  ]
})

export class UsersModule {

}
