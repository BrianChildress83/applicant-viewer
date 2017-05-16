import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

/**
 * ApplicantService - Used when interacting with applicant data
 * @requires Injectable
 * @requires Http, Response
 * @requires Observable
 * @requires Rx
 */
@Injectable()
export class ApplicantService {

  constructor(private http: Http) {}

  /**
   * getAllApplicants - Returns all aplicants from temporary file
   * TODO: Call API when available
   */
  getAllApplicants() {

    return this.http.get('../data.json')
      .map((response: Response) => response.json());

  }

  /**
   * getApplicantById - Retrieves an applicant by its id
   * TODO: Call API when available
   * @param { Integer } id The id of the applicant to return
   */
  getApplicantById(id) {

    return this.http.get('../data.json')
      .map((response: Response) => response.json()) // Format response
      .map((users) => users.filter(user => user.id === id)) // Filter reponse to return requested object by id
      .catch(this.handleError);

  }

  /**
   * handleError - Handles an errors returned, displaying in console
   */
  handleError(error: Response) {

    console.log(error);
    return Observable.throw(error);

  }

}
