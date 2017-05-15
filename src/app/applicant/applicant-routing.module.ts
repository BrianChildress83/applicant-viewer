import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantComponent } from './applicant.component';

const routes: Routes = [
  { path: 'applicant',  component: ApplicantComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class ApplicantRoutingModule {
}
