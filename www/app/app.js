import {App, IonicApp, IonicPlatform} from 'ionic/ionic';
import {Http, HTTP_BINDINGS} from "angular2/http";
import {TabsPage} from './tabs/tabs';
import {Friends} from './data/data';
import {SpeakersService} from './data/speakers';
import {SessionsService} from './data/sessions';

@App({
  template: `<ion-nav [root]="root"></ion-nav>`,
  providers: [Friends, SpeakersService, SessionsService, Http, HTTP_BINDINGS]
})

class MyApp {
  constructor(app: IonicApp, platform: IonicPlatform) {
    this.root = TabsPage;
  }
}
