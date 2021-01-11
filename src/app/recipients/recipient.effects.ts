import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RecipientService } from './recipient.service';
import * as recipientActions from './recipient.actions';
import { map, switchMap } from "rxjs/operators";


@Injectable()
export class RecipientEffects {
    constructor(private actions$: Actions,
        private recipientService: RecipientService){
    }

    @Effect() loadRecipients$ = this.actions$.pipe(
        ofType(recipientActions.LOAD_RECIPIENTS),
        switchMap(() => this.recipientService.loadRecipients()
        .pipe(
            map(recipients => new recipientActions.LoadRecipientsSuccessAction(recipients))
        ))
    );

    @Effect() deleteRecipient$ = this.actions$.pipe(
        ofType(recipientActions.DELETE_RECIPIENT),
        switchMap((action: recipientActions.DeleteRecipientAction) => {
            return this.recipientService.deleteRecipient(action.payload)
            .pipe(
                map(recipient => new recipientActions.DeleteRecipientSuccessAction(recipient.id))
            )
        }
    ));
}