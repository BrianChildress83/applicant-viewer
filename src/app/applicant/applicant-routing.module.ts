import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantComponent } from './applicant.component';
import { IndividualApplicantComponent } from './applicant-individual.component';

const routes: Routes = [
  { path: '', redirectTo: 'applicant' },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'applicant/:id', component: IndividualApplicantComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class ApplicantRoutingModule {}
