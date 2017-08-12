import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateRoute } from './core/private-route';

import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { CreateProfileComponent } from './users/profile/create-profile.component'
import { ProfileComponent } from './users/profile/profile.component';


const routes: Routes = [
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/create-profile', component: CreateProfileComponent},
  { path: 'users/profile/:id', component: ProfileComponent }
  
];

@NgModule ({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class CarRoutesModule {

}
