import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/appState';
import { Recipient } from '../recipient';
import * as recipientActions from '../recipient.actions';

@Component({
  selector: 'app-recipients-list',
  templateUrl: './recipients-list.component.html',
  styleUrls: ['./recipients-list.component.css']
})
export class RecipientsListComponent implements OnInit {

  recipients$: Observable<Recipient[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadRecipients();
    this.recipients$ = this.store.select(state => state.recipients.recipients);
  }

  loadRecipients(): void {
    this.store.dispatch(recipientActions.LoadRecipientsAction());
  }

  deleteRecipient(id: number) {
    this.store.dispatch(recipientActions.DeleteRecipientAction({ recipientId: id }));
  }
}