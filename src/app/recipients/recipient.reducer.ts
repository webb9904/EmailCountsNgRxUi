import { Recipient } from './recipient';
import * as recipientActions from './recipient.actions';

export interface State {
    recipients: Recipient[];
}

const initialState: State = {
    recipients: []
}

export function RecipientReducer(state = initialState, action: recipientActions.Actions): State {
    switch (action.type) {
        case recipientActions.LOAD_RECIPIENTS_SUCCESS: {
            return state = {
                recipients: action.payload
            };
        }
        case recipientActions.DELETE_RECIPIENT_SUCCESS: {
            return state = {
                recipients: state.recipients.filter(recipient => recipient.Id !== action.payload)
            };
        }  
        default:
            return state;
    }
}