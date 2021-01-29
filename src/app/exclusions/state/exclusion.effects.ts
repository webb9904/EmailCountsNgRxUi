import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ExclusionService } from '../exclusion.service';
import * as exclusionActions from './exclusion.actions';
import { map, mergeMap } from "rxjs/operators";

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
                    map(exclusions => exclusionActions.LoadExclusionsSuccessAction({ exclusions }))
                )
            )
        )
    });
}