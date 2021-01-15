import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { NavbarComponent } from '../navbar/navbar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    DatePickerComponent,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class SharedModule { }