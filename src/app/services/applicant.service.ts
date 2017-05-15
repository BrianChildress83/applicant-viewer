import {
  Http,
  Response
} from '@angular/http';

import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ApplicantService {
  constructor(private http: Http) {}

  getAllApplicants() {
    console.log('all applicants');
    return this.http.get('../data.json')
      .map((response: Response) => response.json());
  }

  handleError(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
