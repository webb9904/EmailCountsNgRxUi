import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';

import { RecipientReducer } from './state/recipient.reducer';
import { RecipientEffects } from './state/recipient.effects';

import { RecipientsListComponent } from './recipients-list/recipients-list.component';
import { RecipientsTableComponent } from './recipients-table/recipients-table.component';
import { RecipientsEditComponent } from './recipients-edit/recipients-edit.component';

@NgModule({
    declarations: [
        RecipientsListComponent,
        RecipientsTableComponent,
        RecipientsEditComponent
    ],
    imports: [
        StoreModule.forFeature(
            'recipients', RecipientReducer
        ),
        EffectsModule.forFeature([
            RecipientEffects
        ]),
        SharedModule,
    ]
})
export class RecipientModule { }
