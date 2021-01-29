import { createAction, props } from "@ngrx/store";
import { Exclusion } from "../exclusion";

export const LoadExclusionsAction = createAction(
    'LOAD_EXCLUSIONS'
);

export const LoadExclusionsSuccessAction = createAction(
    'LOAD_EXCLUSIONS_SUCCESS',
    props<{ exclusions: Exclusion[] }>()
);

export const DeleteExclusionAction = createAction(
    'DELETE_EXCLUSION',
    props<{ exclusionId: number }>()
);

export const DeleteExclusionSuccessAction = createAction(
    'DELETE_EXCLUSION_SUCCESS',
    props<{ exclusionId: number }>()
);