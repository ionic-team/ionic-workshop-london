import {Injectable} from "angular2/angular2";
import {Http, HTTP_BINDINGS} from "angular2/http";

@Injectable()
export class SessionsService {
  constructor(http: Http) {
    this.sessionsObservable = http.get('app/data/schedule.json')
                                  .map(res => res.json());
  }

  all(){
    return this.sessionsObservable;
  }
}
