import { createReducer, on } from '@ngrx/store';
import { Exclusion } from "../exclusion";
import * as exclusionActions from './exclusion.actions';


export interface State {
    exclusions: Exclusion[];
}

const initialState: State = {
    exclusions: []
}

export const ExclusionReducer = createReducer<State>(
    initialState,
    on(exclusionActions.LoadExclusionsSuccessAction, (state, action): State => {
        return {
            ...state,
            exclusions: action.exclusions
        };
    }),
    on(exclusionActions.DeleteExclusionSuccessAction, (state, action): State => {
        return {
            ...state,
            exclusions: state.exclusions.filter(exclusion => exclusion.id !== action.exclusionId)
        };
    }),
);