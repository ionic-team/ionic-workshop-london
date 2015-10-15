import {Page, NavController, ViewController} from 'ionic/ionic';
import {SpeakersService} from '../data/speakers';
import {SpeakerCtrl} from '../speaker/speaker';

@Page({
  templateUrl: 'app/speakers/speakers.html'
})
export class SpeakersCtrl {
  constructor(
    nav: NavController,
    view: ViewController,
    speakers:SpeakersService
  ) {

    this.nav = nav;
    this.view = view;
    speakers.all().subscribe(res => {
      this.speakers = res;
      console.log(this.speakers)
    });

  }

  passSpeaker(speaker) {
    this.nav.push(SpeakerCtrl, {
      speaker: speaker
    });
  }
}
