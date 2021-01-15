import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipient } from '../recipient';

@Component({
  selector: 'app-recipients-table',
  templateUrl: './recipients-table.component.html',
  styleUrls: ['./recipients-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipientsTableComponent {

  @Input() recipients: Recipient[];
  @Output() deleteRecipient = new EventEmitter<Recipient>();

  filter: any;

  order: string = 'EmailAddress';
  reverse: boolean = false;

  pageIndex: number = 1;
  itemsPerPage: number = 5;

  applyFilter(field: string, input: string): void {
    this.filter = { [field]: input };
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