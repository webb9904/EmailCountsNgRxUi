import { createReducer, on } from '@ngrx/store';
import { Exclusion } from "../exclusion";
import * as exclusionActions from './exclusion.actions';


export interface State {
    exclusions: Exclusion[];
    error: string;
}

const initialState: State = {
    exclusions: [],
    error: ''
    
}

export const ExclusionReducer = createReducer<State>(
    initialState,
    on(exclusionActions.LoadExclusionsSuccessAction, (state, action): State => {
        return {
            ...state,
            exclusions: action.exclusions
        };
    }),
    on(exclusionActions.LoadExclusionsFailureAction, (state, action): State => {
        return {
            ...state,
            exclusions: [],
            error: action.error
        }
    }),
    on(exclusionActions.DeleteExclusionSuccessAction, (state, action): State => {
        return {
            ...state,
            exclusions: state.exclusions.filter(exclusion => exclusion.id !== action.exclusionId)
        };
    }),
    on(exclusionActions.DeleteExclusionsFailureAction, (state, action): State => {
        return {
            ...state,
            exclusions: [],
            error: action.error
        }
    }),
);