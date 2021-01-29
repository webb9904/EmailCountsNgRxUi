import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./exclusion.reducer";

const selectExclusions = createFeatureSelector<State>('exclusions');

export const getExclusionById = (id) => createSelector(selectExclusions, (allExclusions) => {
    return allExclusions.exclusions.find(e => {
        return e.id.toString() === id;
    });
});