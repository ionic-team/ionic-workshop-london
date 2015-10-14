import {Page} from 'ionic/ionic';
import {DashCtrl} from '../dash/dash';
import {ScheduleCtrl} from '../schedule/schedule'; 
import {AccountCtrl} from '../account/account';

@Page({
  templateUrl: 'app/tabs/tabs.html',
})

export class TabsPage {
  constructor() {
    this.DashRoot = DashCtrl;
    this.ScheduleRoot = ScheduleCtrl;
    this.AccountRoot = AccountCtrl;
  }
}