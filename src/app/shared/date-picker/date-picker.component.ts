import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from './app-date-adapter';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class DatePickerComponent implements OnInit {

  @Output() dateSelected = new EventEmitter<any>();

  public form: FormGroup;
  public submitted: boolean;

  ngOnInit(): void {
    this.form = new FormGroup({
      dateTime: new FormControl(null, Validators.required)
    });
  }

  submit(): void {
    this.submitted = true;
    const date = moment(this.form.get('dateTime').value).format('YYYY-MM-DD');
    this.dateSelected.emit({ date: date, submitted: this.submitted });
    this.submitted = false;
  }
}
