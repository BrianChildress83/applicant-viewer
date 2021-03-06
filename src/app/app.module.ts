import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppProviders } from './app.providers';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';
import { ApplicantModule } from './applicant/applicant.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    CoreModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ApplicantModule,
    AppRoutingModule
  ],
  providers: [AppProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
