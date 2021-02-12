import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./recipient.reducer";

const recipientState = createFeatureSelector<State>('recipients');

export const getRecipientById = (id) => createSelector(recipientState, (allRecipients) => {
    return allRecipients.recipients.find(r => {
        return r.id.toString() === id;
    });
});

export const getError = createSelector(recipientState, state => state.error);