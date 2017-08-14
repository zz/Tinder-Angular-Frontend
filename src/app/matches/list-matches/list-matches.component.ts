import { MatchesService } from '../matches.service';
import { Match } from '../match';
import { MatchesActions } from '../../store/matches/matches.actions';
import { IAppState } from '../../store';
import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.css']
})
export class ListMatchesComponent implements OnInit {
  private matches: Match[] = [];

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private matchesActions: MatchesActions,
    private matchesService: MatchesService
  ) { }

  ngOnInit() {
    this.matchesActions.fetchMatches();
    this.ngRedux
      .select(state => state.matches)
      .subscribe(matchesState => {
        this.matches = matchesState.matches.map(x => this.matchesService.convertDbMatchToModel(x));
      });
  }

}
