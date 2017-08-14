import { MatchesService } from '../../matches/matches.service';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '..';

export const MATCHES_LOAD = 'matches/LOAD';

@Injectable()
export class MatchesActions {
  constructor(
    private matchesService: MatchesService,
    private ngRedux: NgRedux<IAppState>
  ) {}

  fetchMatches() {
    this.matchesService.getMyMatches()
      .subscribe(matches => {
        this.ngRedux.dispatch({
          type: MATCHES_LOAD,
          matches
        });
      });
  }

  matchWithAdmin() {
    this.matchesService.createMatch({}).subscribe(console.log); // TODO
  }
}
