import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RecipientService } from '../recipient.service';
import * as recipientActions from './recipient.actions';
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from 'rxjs';

@Injectable()
export class RecipientEffects {
    constructor(private actions$: Actions,
        private recipientService: RecipientService) {
    }

    loadRecipients$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(recipientActions.LoadRecipientsAction),
            mergeMap(() => this.recipientService.loadRecipients()
                .pipe(
                    map(recipients => recipientActions.LoadRecipientsSuccessAction({ recipients })),
                    catchError(error => of(recipientActions.LoadRecipientsFailureAction({ error })))
                )
            )
        )
    });

    deleteRecipient$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(recipientActions.DeleteRecipientAction),
            mergeMap(action => 
                this.recipientService.deleteRecipient(action.recipientId)
                .pipe(
                    map(() => recipientActions.DeleteRecipientSuccessAction({ recipientId: action.recipientId })),
                    catchError(error => of(recipientActions.DeleteRecipientFailureAction({ error })))
                )
            )
        )
    });
}