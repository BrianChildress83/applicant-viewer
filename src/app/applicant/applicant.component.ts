import {
  Component,
  OnInit
} from '@angular/core';

import {
  ApplicantService
} from '../services/applicant.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html'
})

export class ApplicantComponent implements OnInit {
  applicantsArray: any;
  constructor(private applicantSvc: ApplicantService) {}

  ngOnInit() {
    this.applicantSvc.getAllApplicants().subscribe(
      applicants => {
        console.log(applicants);
        this.applicantsArray = applicants;
      });
  }
}
