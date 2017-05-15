import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';

@NgModule({
    declarations: [
        ApplicantComponent
    ],
    imports: [
        ApplicantRoutingModule,
        CommonModule
    ],
    exports: [
        ApplicantComponent
    ]
})
export class ApplicantModule {
}
