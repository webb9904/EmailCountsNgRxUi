import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { NavbarComponent } from '../navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class SharedModule { }