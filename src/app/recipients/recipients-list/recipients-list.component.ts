import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/appState';
import { Recipient } from '../recipient';
import * as recipientActions from '../state/recipient.actions';
import * as recipientSelectors from '../state/recipient.selectors';

@Component({
  selector: 'app-recipients-list',
  templateUrl: './recipients-list.component.html',
  styleUrls: ['./recipients-list.component.css']
})
export class RecipientsListComponent implements OnInit {

  recipients$: Observable<Recipient[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadRecipients();
    this.recipients$ = this.store.select(state => state.recipients.recipients);
    this.errorMessage$ = this.store.select(recipientSelectors.getError);
  }

  loadRecipients(): void {
    this.store.dispatch(recipientActions.LoadRecipientsAction());
  }

  deleteRecipient(id: number): void {
    this.store.dispatch(recipientActions.DeleteRecipientAction({ recipientId: id }));
  }
}