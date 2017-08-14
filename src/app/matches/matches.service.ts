import { Match } from './match';
import { AuthService } from '../core/auth.service';
import { HttpService } from '../core/http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MatchesService {

  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) { }

  getMyMatches() {
    return this.httpService.get('matches/mine');
  }

  createMatch(user) {
    return this.httpService.post('matches/598d7262fcc23c47d67e6de6', {}); // TODO
  }

  convertDbMatchToModel(match): Match {
    const currentEmail = this.authService.getUser();
    let currentuser: any;
    let otherUser: any;

    if (match.user1.user.email === currentEmail) {
      otherUser =  match.user2.user;
      currentuser = match.user1.user;
    } else {
      otherUser =  match.user1.user;
      currentuser = match.user2.user;
    }

    return {
      user: otherUser,
      timestamp: new Date(match.timestamp),
      unread: !currentuser.read
    };

  }
}
