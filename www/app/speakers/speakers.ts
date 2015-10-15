import {Page, NavController, ViewController} from 'ionic/ionic';
import {Friends} from '../data/data';
import {SpeakerCtrl} from '../speaker/speaker';

@Page({
  templateUrl: 'app/speakers/speakers.html'
})
export class SpeakersCtrl {
  constructor(friends: Friends, nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
    this.speakers = friends.all();


  }

  passChat(speaker) {
    this.nav.push(SpeakerCtrl, {
      speaker: speaker
    });
  }
}
