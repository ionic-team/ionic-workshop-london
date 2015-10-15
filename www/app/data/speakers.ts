import {Injectable} from "angular2/angular2";
import {Http, HTTP_BINDINGS} from "angular2/http";

@Injectable()
export class SpeakersService {
  //constructor(http: Http) {
  constructor() {
    console.log('hi')
    // http.get('app/data/speakers.json')
    //     .map(res => res.json())
    //     .subscribe(speakers =>{
    //       console.log(speakers);
    //       this.speakers = speakers
    //     })
    this.speakers = [];
  }

  all(){
    return this.speakers;
  }
}
