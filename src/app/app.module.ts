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
import { RecipientEffects } from './recipients/recipient.effects';
import { RecipientReducer } from './recipients/recipient.reducer';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    RecipientsListComponent,
    RecipientsTableComponent,
    RecipientsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({recipients: RecipientReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([RecipientEffects]),
    MaterialModule,
    SharedModule,
    OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
