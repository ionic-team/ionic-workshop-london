import {Page, NavController, ViewController} from 'ionic/ionic';
//import {Http, HTTP_BINDINGS} from "angular2/http";
import {Friends} from '../data/data';
import {SpeakersService} from '../data/speakers';
import {SpeakerCtrl} from '../speaker/speaker';

@Page({
  templateUrl: 'app/speakers/speakers.html',
  providers: [SpeakersService],
  //viewBindings: [HTTP_BINDINGS]
})
export class SpeakersCtrl {
  constructor(
    //friends: Friends,
    nav: NavController,
    view: ViewController,
    speakers:SpeakersService
  ) {

    this.nav = nav;
    this.view = view;
    //this.speakers = friends.all();
    //console.log(speakers.all());

  }

  passChat(speaker) {
    this.nav.push(SpeakerCtrl, {
      speaker: speaker
    });
  }
}
