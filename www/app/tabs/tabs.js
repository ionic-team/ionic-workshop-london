import {Page} from 'ionic/ionic';
import {SessionsCtrl} from '../sessions/sessions';
import {SpeakersCtrl} from '../speakers/speakers';
import {AboutCtrl} from '../about/about';

@Page({
  templateUrl: 'app/tabs/tabs.html',
})

export class TabsPage {
  constructor() {
    this.SessionsRoot = SessionsCtrl;
    this.SpeakersRoot = SpeakersCtrl;
    this.AboutRoot = AboutCtrl;
  }
}
