import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { Recipient } from '../recipient';

@Component({
  selector: 'app-recipients-table',
  templateUrl: './recipients-table.component.html',
  styleUrls: ['./recipients-table.component.css']
})
export class RecipientsTableComponent {

  @Input() recipients: Recipient[];
  @Output() deleteRecipient: EventEmitter<number> = new EventEmitter<number>();

  sortedCollection: Recipient[];
  order: string = 'EmailAddress';
  reverse: boolean = false;
  pageIndex: number = 1;

  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.recipients, 'EmailAddress');
  }

  setOrder(value: string) {
    if (this.order.toLocaleLowerCase() === value.toLocaleLowerCase()) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
