import {Page} from 'ionic/ionic';
import {DashCtrl} from '../dash/dash';
import {SpeakersCtrl} from '../speakers/speakers';
import {AboutCtrl} from '../about/about';

@Page({
  templateUrl: 'app/tabs/tabs.html',
})

export class TabsPage {
  constructor() {
    this.DashRoot = DashCtrl;
    this.SpeakersRoot = SpeakersCtrl;
    this.AboutRoot = AboutCtrl;
  }
}
