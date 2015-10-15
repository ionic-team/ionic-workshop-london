import {Injectable} from "angular2/angular2";
import {Http, HTTP_BINDINGS} from "angular2/http";

@Injectable()
export class SpeakersService {
  constructor(http: Http) {
    this.speakersObservable = http.get('app/data/speakers.json')
                                  .map(res => res.json());
  }

  all(){
    return this.speakersObservable;
  }
}
