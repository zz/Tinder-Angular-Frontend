import { MatchesActions } from '../store/matches/matches.actions';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';
import { ListMatchesComponent } from './list-matches/list-matches.component';
import { MatchesService } from './matches.service';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  declarations: [ListMatchesComponent],
  providers: [MatchesService, MatchesActions]
})
export class MatchesModule { }
