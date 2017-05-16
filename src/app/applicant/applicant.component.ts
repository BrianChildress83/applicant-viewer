import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApplicantService } from '../services/applicant.service';

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
  }];

  constructor(private router: Router,
    private applicantSvc: ApplicantService) {}

  /**
   * ngOnInit - Initializes with component
   */
  ngOnInit() {

    this.applicantSvc.getAllApplicants().subscribe(
      applicants => {
        this.applicantsArray = applicants;
      });

  }

  /**
   * setSelectedRow - Set a selected row based on what is returned from datatable component
   * @param { Object } evt The event returned from the datatable event emitter
   */
  setSelectedRow(evt) {

    this.router.navigate(['/applicant', evt.id]);

  }
}
