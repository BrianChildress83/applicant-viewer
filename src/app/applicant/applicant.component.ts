import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApplicantService } from '../services/applicant.service';
import { FavoriteService } from '../services/favorite.service';

/**
 * ApplicantComponent -  Used to display and interacte with all applicants
 * information
 * @requires Component, OnInit
 * @requires Router
 * @requires ApplicantService
 */
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html'
})

export class ApplicantComponent implements OnInit {

  applicantsArray: any;

  columns: Array < Object > = [{
    value: 'name',
    header: 'Name'
  }, {
    value: 'position',
    header: 'Position'
  }, {
    value: 'experience',
    header: 'Experience'
  }, {
    value: 'favorited',
    header: 'Favorited'
  }];

  constructor(private router: Router,
    private applicantSvc: ApplicantService,
    private favoriteSvc: FavoriteService) {}

  /**
   * ngOnInit - Initializes with component
   */
  ngOnInit() {

    this.applicantSvc.getAllApplicants().subscribe(
      applicants => {
        this.setupApplicantsArray(applicants);
      });

  }

  /**
   * setSelectedRow - Set a selected row based on what is returned from datatable component
   * @param { Object } evt The event returned from the datatable event emitter
   */
  setSelectedRow(evt) {

    this.router.navigate(['/applicant', evt.id]);

  }

  /**
   * setupApplicantsArray - Handles manipulation of the applicantsArray before being passed
   * to the datatable component. Currently this sets a favorited flag on each element in the array
   * this data would likely be returned from an API in the future.
   */
  setupApplicantsArray(applicants) {

    let tempArr = [];

    for (let app of applicants) {
      let fav = this.favoriteSvc.isFavorited(app.id);

      app.favorited = fav;

      tempArr.push(app);
    }

    // Set applicants array to be displayed
    this.applicantsArray = tempArr;

  }

}
