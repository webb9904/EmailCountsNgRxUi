import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Exclusion } from '../exclusion';

@Component({
  selector: 'app-exclusions-table',
  templateUrl: './exclusions-table.component.html',
  styleUrls: ['./exclusions-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExclusionsTableComponent {

  @Input() exclusions: Exclusion[];
  @Output() deleteExclusion = new EventEmitter<Exclusion>();

  filter: any;

  order: string = 'Domain';
  reverse: boolean = false;

  pageIndex: number = 1;
  itemsPerPage: number = 5;

  applyFilter(field: string, input: string): void {
    const filter = input ? input : null

    this.filter = { [field]: filter };
  }

  setOrder(field: string): void {
    if (this.order.toLocaleLowerCase() === field.toLocaleLowerCase()) {
      this.reverse = !this.reverse;
    }
    this.order = field;
  }

  pageChange(event: number): void {
    this.pageIndex = event;
  }

  pageBoundsCorrection(event: number): void {
    this.pageIndex = event;
  }
}
