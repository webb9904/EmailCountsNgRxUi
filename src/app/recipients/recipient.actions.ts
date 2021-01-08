import { Action } from "@ngrx/store";
import { Recipient } from "./recipient";

export const LOAD_RECIPIENTS = 'LOAD_RECIPIENTS';
export const LOAD_RECIPIENTS_SUCCESS = 'LOAD_RECIPIENTS_SUCCESS';
export const DELETE_RECIPIENT = 'DELETE_RECIPIENT';
export const DELETE_RECIPIENT_SUCCESS = 'DELETE_RECIPIENT_SUCCESS';

export class LoadRecipientsAction implements Action {
    readonly type = LOAD_RECIPIENTS;
}

export class LoadRecipientsSuccessAction implements Action {
    readonly type = LOAD_RECIPIENTS_SUCCESS;

    constructor(public payload: Recipient[]) {
    }
}

export class DeleteRecipientAction implements Action {
    readonly type = DELETE_RECIPIENT;

    constructor(public payload: number) {
    }
}

export class DeleteRecipientSuccessAction implements Action {
    readonly type = DELETE_RECIPIENT_SUCCESS;

    constructor(public payload: number) {
    }
}

export type Actions
    = LoadRecipientsAction
    | LoadRecipientsSuccessAction
    | DeleteRecipientAction
    | DeleteRecipientSuccessAction