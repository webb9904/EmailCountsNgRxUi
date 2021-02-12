import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./exclusion.reducer";

const exclusionState = createFeatureSelector<State>('exclusions');

export const getExclusionById = (id) => createSelector(exclusionState, (allExclusions) => {
    return allExclusions.exclusions.find(e => {
        return e.id.toString() === id;
    });
});

export const getError = createSelector(exclusionState, state => state.error);