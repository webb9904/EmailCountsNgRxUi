import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./recipient.reducer";

const selectRecipients = createFeatureSelector<State>('recipients');

export const getRecipientById = (id) => createSelector(selectRecipients, (allRecipients) => {
    return allRecipients.recipients.find(r => {
        return r.id.toString() === id;
    });
});