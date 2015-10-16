import {Page, NavParams} from 'ionic/ionic';
import {Injectable} from "angular2/angular2";

@Injectable()
@Page({
  templateUrl: 'app/session/session.html'
})

export class SessionCtrl {
   constructor(params: NavParams) {
    this.session = params.get('session');
    console.log(this.session)
   }


}
