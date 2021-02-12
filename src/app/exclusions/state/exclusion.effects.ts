import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ExclusionService } from '../exclusion.service';
import * as exclusionActions from './exclusion.actions';
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from 'rxjs';

@Injectable()
export class ExclusionEffects {
    constructor(private actions$: Actions,
        private exclusionService: ExclusionService) {
    }

    loadExclusions$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(exclusionActions.LoadExclusionsAction),
            mergeMap(() => this.exclusionService.loadExclusions()
                .pipe(
                    map(exclusions => exclusionActions.LoadExclusionsSuccessAction({ exclusions })),
                    catchError(error => of(exclusionActions.LoadExclusionsFailureAction({ error })))
                )
            )
        )
    });

    deleteExclusion$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(exclusionActions.DeleteExclusionAction),
            mergeMap(action => 
                this.exclusionService.deleteExclusion(action.exclusionId)
                .pipe(
                    map(() => exclusionActions.DeleteExclusionSuccessAction({ exclusionId: action.exclusionId })),
                    catchError(error => of(exclusionActions.DeleteExclusionsFailureAction({ error })))
                )
            )
        )
    });
}