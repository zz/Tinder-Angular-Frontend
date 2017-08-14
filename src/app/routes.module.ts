import { ListComponent } from './users/list/list.component';
import { ListMatchesComponent } from './matches/list-matches/list-matches.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateRoute } from './core/private-route';

import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';


const routes: Routes = [
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'matches/list', component: ListMatchesComponent, canActivate: [PrivateRoute]},
  { path: 'users/list', component: ListComponent, canActivate: [PrivateRoute] },
  { path: 'matches/list', component: ListMatchesComponent, canActivate: [PrivateRoute]}
];

@NgModule ({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class CarRoutesModule {

}
