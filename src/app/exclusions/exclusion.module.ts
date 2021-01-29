import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';

import { ExclusionEffects } from './state/exclusion.effects';
import { ExclusionReducer } from './state/exclusion.reducer';

import { ExclusionsListComponent } from './exclusions-list/exclusions-list.component';
import { ExclusionsTableComponent } from './exclusions-table/exclusions-table.component';
import { ExclusionsEditComponent } from './exclusions-edit/exclusions-edit.component';

@NgModule({
    declarations: [
        ExclusionsListComponent,
        ExclusionsTableComponent,
        ExclusionsEditComponent    
    ],
    imports: [
        StoreModule.forFeature(
            'exclusions', ExclusionReducer
        ),
        EffectsModule.forFeature([
            ExclusionEffects
        ]),
        SharedModule,
    ]
})
export class ExclusionModule { }
