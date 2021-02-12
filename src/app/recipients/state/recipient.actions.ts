import { createAction, props } from "@ngrx/store";
import { Recipient } from "../recipient";

export const LoadRecipientsAction = createAction(
    'LOAD_RECIPIENTS'
);

export const LoadRecipientsSuccessAction = createAction(
    'LOAD_RECIPIENTS_SUCCESS',
    props<{ recipients: Recipient[] }>()
);

export const LoadRecipientsFailureAction = createAction(
    'LOAD_RECIPIENTS_FAILURE',
    props<{ error: string }>()
);

export const DeleteRecipientAction = createAction(
    'DELETE_RECIPIENT',
    props<{ recipientId: number }>()
);

export const DeleteRecipientSuccessAction = createAction(
    'DELETE_RECIPIENT_SUCCESS',
    props<{ recipientId: number }>()
);

export const DeleteRecipientFailureAction = createAction(
    'DELETE_RECIPIENT_FAILURE',
    props<{ error: string }>()
);