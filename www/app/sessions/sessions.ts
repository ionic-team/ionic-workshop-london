///<referenc path="../../../typings/angular2/angular2.d.ts" />
import {Page, NavController} from 'ionic/ionic';
import {SessionsService} from '../data/sessions';
import {SessionCtrl} from '../session/session';

@Page({
  templateUrl: 'app/sessions/sessions.html',
})
export class SessionsCtrl {
  constructor(
    nav: NavController,
    sessions:SessionsService
  ) {
    this.nav = nav;
    sessions.all().subscribe(res => {
      this.sessions = res;
      console.log(this.sessions)
    });
  }

  passSession(session) {
    this.nav.push(SessionCtrl, {
      session: session
    });
  }

}
