import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountsShellComponent } from './counts/counts-shell/counts-shell.component';
import { RecipientsEditComponent } from './recipients/recipients-edit/recipients-edit.component';
import { RecipientsListComponent } from './recipients/recipients-list/recipients-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'counts', component: CountsShellComponent },
  { path: 'recipients', component: RecipientsListComponent },
  { path: 'recipients/edit/:id', component: RecipientsEditComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
