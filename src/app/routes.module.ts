import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateRoute } from './core/private-route';

import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';


const routes: Routes = [
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent }
];

@NgModule ({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class CarRoutesModule {

}
