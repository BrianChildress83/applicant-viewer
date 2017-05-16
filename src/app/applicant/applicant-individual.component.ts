import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApplicantService } from '../services/applicant.service';
import { FavoriteService } from '../services/favorite.service';

/**
 * IndividualApplicantComponent - Used to display and individual applicants
 * information
 * @requires Component, OnDestroy, OnInit
 * @requires ActivatedRoute
 * @requires ApplicantService
 * @requires FavoriteService
 */
@Component({
  selector: 'app-applicant-individual',
  templateUrl: './applicant-individual.component.html'
})

export class IndividualApplicantComponent implements OnDestroy, OnInit {
  applicant: any;
  id: number;
  initialNavigation: any;
  isFavorited: Boolean = false;

  constructor(private route: ActivatedRoute,
    private applicantSvc: ApplicantService,
    private favoriteSvc: FavoriteService) {}

  /**
   * ngOnDestory - Destroys when component is cleaned up
   */
  ngOnDestroy() {

    this.initialNavigation.unsubscribe();

  }

  /**
   * ngOnInit - Initializes with component
   */
  ngOnInit() {
    this.applicant = {};
    // Watch for navigation, retrieve id from url params
    this.initialNavigation = this.route.params.subscribe(params => {
      this.id = +params['id'];

      // Get applicant information
      this.getApplicantInformation(this.id);
      this.determineFavoriteStatus(this.id);
    });

  }

  /**
   * determineFavoriteStatus - Determine if an application has been favorited by its id
   * @param { Integer } id The id of the application to evaluate
   */
  determineFavoriteStatus(id) {
    this.isFavorited = this.favoriteSvc.isFavorited(id);
  }

  /**
   * getApplicantInformation - Retrieve applicant information by its id
   * @param { Integer } id The id of the application to retrieve
   */
  getApplicantInformation(id) {
    this.applicantSvc.getApplicantById(id).subscribe(
      applicant => {
        this.setupApplicant(applicant[0]);
      });
  }

  /**
   * setFavorite - Set a favorite using the favorite service
   */
  setFavorite() {

    this.favoriteSvc.addFavorite(this.id);

    // Toggle favorited status
    this.isFavorited = !this.isFavorited;
  }

  /**
   * setupApplicant - Handles setting up applicant object based on data received from API,
   * formatting, interpretting, etc.
   * @param { Object } applicant The applicant object to use for display
   */
  setupApplicant(applicant) {
    this.applicant.name = applicant.name;
    this.applicant.position = applicant.position;
    this.applicant.applied = applicant.applied;

    // Experience
    if (applicant.experience) {
      if (applicant.experience > 1) {
        this.applicant.experience = applicant.experience + ' yrs';
      } else if (applicant.experience === 1) {
        this.applicant.experience = applicant.experience + ' yr';
      } else if (applicant.experience < 1) {
        this.applicant.experience = 'Less than 1 yr';
      } else {
        this.applicant.experience = 'Not provided';
      }
    }

    // Availability
    if (applicant.availability) {
      // let availArr = applicant.availability.split(',');
      let obj = applicant.availability;
      let availArr = [];
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          console.log(key, obj[key]);
          let temp = {
            date: key,
            availability: obj[key]
          };
          // availArr.push(key + ':' + obj[key]);
          availArr.push(temp);
        }
      }

      this.applicant.availability = availArr;
    }

    // Questions
    if (applicant.questions) {
      this.applicant.questions = applicant.questions;
    } else {
      this.applicant.questions = [];
    }

  }

}
