import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantComponent } from './applicant.component';
import { IndividualApplicantComponent } from './applicant-individual.component';

const routes: Routes = [
  { path: '', redirectTo: 'applicants', pathMatch: 'full' },
  { path: 'applicants', component: ApplicantComponent },
  { path: 'applicant/:id', component: IndividualApplicantComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class ApplicantRoutingModule {}
