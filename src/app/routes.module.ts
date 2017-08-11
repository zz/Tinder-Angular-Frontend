import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { PrivateRoute } from './core/private-route'

import { LoginComponent } from './users/login.component'
import { AddCarComponent } from './cars/add-car.component'
import { RegisterComponent } from './users/register.component'


const routes: Routes = [
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { 
    path: 'cars/add', 
    component: AddCarComponent,
    canActivate: [PrivateRoute]
  }
];

@NgModule ({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class CarRoutesModule {

}