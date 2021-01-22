import { createReducer, on } from '@ngrx/store';
import { Recipient } from '../recipient';
import * as recipientActions from './recipient.actions';

export interface State {
    recipients: Recipient[];
}

const initialState: State = {
    recipients: []
}

export const RecipientReducer = createReducer<State>(
    initialState,
    on(recipientActions.LoadRecipientsSuccessAction, (state, action): State => {
        return {
            ...state,
            recipients: action.recipients
        };
    }),
    on(recipientActions.DeleteRecipientSuccessAction, (state, action): State => {
        return {
            ...state,
            recipients: state.recipients.filter(recipient => recipient.id !== action.recipientId)
        };
    }),
);