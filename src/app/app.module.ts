import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router'

import { NgReduxModule, NgRedux } from 'ng2-redux'
import { store, IAppState } from './store'

import { CarRoutesModule } from './routes.module'

import { AppComponent } from './app.component';

import { UsersModule } from './users/users.module'
import { CoreModule } from './core/core.module'
import { CarsModule } from './cars/cars.module'

import { AuthService } from './core/auth.service'
import { config } from './core/config'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    UsersModule,
    CarRoutesModule,
    CoreModule,
    CarsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor (
     private ngRedux: NgRedux<IAppState>,
     private authService: AuthService,
     private router: Router 
    ) {
     this.ngRedux.provideStore(store);
     config(ngRedux, router, authService);
   }
 }
