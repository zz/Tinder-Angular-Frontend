import { Message } from '../message';
import { MatchesService } from '../matches.service';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from '../../store/app.state';
import { NgRedux } from 'ng2-redux';
import { MatchesActions } from '../../store/matches/matches.actions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private id: number;
  private messages: Message[];

  constructor(
    private matchesActions: MatchesActions,
    private ngRedux: NgRedux<IAppState>,
    private activatedRoute: ActivatedRoute,
    private matchesService: MatchesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;

      this.fetchMessages();
    });
    this.ngRedux.select(state => state.matches).subscribe(matchesState => {
      this.messages = matchesState.messages.map(x => this.matchesService.convertDbMessageToModel(x));
      // console.log(this.messages);
    });
  }

  fetchMessages() {
    this.matchesActions.fetchMessages(this.id);
  }

  send(message) {
    this.matchesActions.sendMessage(this.id, message);
  }

}
