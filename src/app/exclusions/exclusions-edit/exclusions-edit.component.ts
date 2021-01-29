import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState';
import { ExclusionService } from '../exclusion.service';
import * as exclusionSelectors from "../state/exclusion.selectors";

@Component({
  selector: 'app-exclusions-edit',
  templateUrl: './exclusions-edit.component.html',
  styleUrls: ['./exclusions-edit.component.css']
})
export class ExclusionsEditComponent implements OnInit {

  exclusionForm: FormGroup;
  isNewExclusion: boolean;
  exclusionId: any;

  constructor(private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private exclusionService: ExclusionService,
    private fb: FormBuilder) {
    }

  ngOnInit(): void {
    this.exclusionId = this.activatedRoute.snapshot.params['id'];
    this.isNewExclusion = this.exclusionId === 'new';
    this.buildForm();
    if(!this.isNewExclusion) {
      this.getExclusion();
    }
  }

  getExclusion() {
    this.store.select(exclusionSelectors.getExclusionById(this.exclusionId))
    .subscribe((r) => {
      this.exclusionForm.patchValue(r);
    });
  }

  buildForm() {
    this.exclusionForm = this.fb.group({
      id: [null],
      Domain: ['', Validators.required],
      FullAddress: ['', [Validators.required]]
    })
  }

  goBack() {
    this.router.navigate(['exclusions']);
  }

  saveExclusion() {
    if (this.isNewExclusion) {
      this.exclusionService.addExclusion(this.exclusionForm.value)
      .subscribe(() => this.router.navigate(['exclusions']));
    } else {
      const exclusionToUpdate = { ...this.exclusionForm.value };
      this.exclusionService.updateExclusion(exclusionToUpdate, this.exclusionId)
      .subscribe(() => this.router.navigate(['exclusions']));
    }
  }
}
