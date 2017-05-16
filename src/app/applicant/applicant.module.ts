import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { IndividualApplicantComponent } from './applicant-individual.component';

@NgModule({
  declarations: [
    ApplicantComponent,
    IndividualApplicantComponent
  ],
  imports: [
    ApplicantRoutingModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ApplicantComponent,
    IndividualApplicantComponent
  ]
})
export class ApplicantModule {}
