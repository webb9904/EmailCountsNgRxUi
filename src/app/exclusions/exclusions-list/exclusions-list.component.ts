import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/appState';
import { Exclusion } from '../exclusion';
import * as exclusionActions from '../state/exclusion.actions';

@Component({
  selector: 'app-exclusions-list',
  templateUrl: './exclusions-list.component.html',
  styleUrls: ['./exclusions-list.component.css']
})
export class ExclusionsListComponent implements OnInit {

  exclusions$: Observable<Exclusion[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadExclusions();
    this.exclusions$ = this.store.select(state => state.exclusions.exclusions);
  }

  loadExclusions(): void {
    this.store.dispatch(exclusionActions.LoadExclusionsAction());
  }

  deleteExclusion(id: number): void {
    this.store.dispatch(exclusionActions.DeleteExclusionAction({ exclusionId: id }));
  }
}
