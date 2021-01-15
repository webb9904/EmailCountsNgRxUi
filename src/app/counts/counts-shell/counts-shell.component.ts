import { Component } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-counts-shell',
  templateUrl: './counts-shell.component.html',
  styleUrls: ['./counts-shell.component.css']
})
export class CountsShellComponent {

  count: number;

  dateSelected: string;
  submitted: boolean;
  loading: boolean;

  constructor(private countService: CountService) {
  }

  getCounts(event: any) {
    this.loading = true;
    this.dateSelected = event.date;
    this.submitted = event.submitted;

    this.countService.getCount(event.date)
      .subscribe(result => {
        this.count = result;
        this.loading = false;
      });
  }
}
