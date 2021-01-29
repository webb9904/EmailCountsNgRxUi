import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { RecipientsListComponent } from './recipients/recipients-list/recipients-list.component';
import { RecipientsTableComponent } from './recipients/recipients-table/recipients-table.component';
import { RecipientsEditComponent } from './recipients/recipients-edit/recipients-edit.component';
import { RecipientEffects } from './recipients/state/recipient.effects';
import { RecipientReducer } from './recipients/state/recipient.reducer';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CountsShellComponent } from './counts/counts-shell/counts-shell.component';
import { ExclusionsListComponent } from './exclusions/exclusions-list/exclusions-list.component';
import { ExclusionsTableComponent } from './exclusions/exclusions-table/exclusions-table.component';
import { ExclusionsEditComponent } from './exclusions/exclusions-edit/exclusions-edit.component';
import { ExclusionReducer } from './exclusions/state/exclusion.reducer';
import { ExclusionEffects } from './exclusions/state/exclusion.effects';

@NgModule({
  declarations: [
    AppComponent,
    RecipientsListComponent,
    RecipientsTableComponent,
    RecipientsEditComponent,
    CountsShellComponent,
    ExclusionsListComponent,
    ExclusionsTableComponent,
    ExclusionsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      recipients: RecipientReducer,
      exclusions: ExclusionReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([
      RecipientEffects,
      ExclusionEffects
    ]),
    MaterialModule,
    SharedModule,
    OrderModule,
    NgxPaginationModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
