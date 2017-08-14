import { MatchesService } from '../../matches/matches.service';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '..';

export const MATCHES_LOAD = 'matches/LOAD';
export const MESSAGES_LOAD = 'messages/LOAD';

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

  fetchMessages(id) {
    this.matchesService.getMessages(id).subscribe(response => {
      if (response.success !== false) {
        this.ngRedux.dispatch({
          type: MESSAGES_LOAD,
          messages: response
        });
      } else {
        console.log(response); // Render error message
      }
    });
  }

  sendMessage (id, message) {
    this.matchesService.sendMessage(id, message).subscribe(response => {
      if (response.success !== false) {
        this.ngRedux.dispatch({
          type: MESSAGES_LOAD,
          messages: response
        });
      } else {
        console.log(response); // Render error message
      }
    });
  }
}
