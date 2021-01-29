import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { NavbarComponent } from '../navbar/navbar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    DatePickerComponent,
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    OrderModule,
    NgxPaginationModule,
    FilterPipeModule
  ],
  providers: []
})
export class SharedModule { }