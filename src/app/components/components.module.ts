import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  DatatableComponent
} from './datatable/index';

@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DatatableComponent
  ]
})
export class ComponentsModule {}
