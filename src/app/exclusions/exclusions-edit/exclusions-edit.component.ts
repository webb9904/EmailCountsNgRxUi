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

  getExclusion(): void {
    this.store.select(exclusionSelectors.getExclusionById(this.exclusionId))
    .subscribe((result) => {
      if (result) {
        this.exclusionForm.patchValue(result);
      }
    });
  }

  buildForm(): void {
    this.exclusionForm = this.fb.group({
      id: [null],
      Domain: ['', Validators.required],
      FullAddress: ['', [Validators.required]]
    })
  }

  goBack(): void {
    this.router.navigate(['exclusions']);
  }

  saveExclusion(): void {
    if (this.isNewExclusion) {
      const exclusionToAdd = {
        Domain: this.exclusionForm.get('Domain').value,
        FullAddress: this.exclusionForm.get('FullAddress').value
      }
      this.exclusionService.addExclusion(exclusionToAdd).subscribe(() => this.goBack());
    } else {
      const exclusionToUpdate = { ...this.exclusionForm.value };
      this.exclusionService.updateExclusion(exclusionToUpdate, this.exclusionId)
      .subscribe(() => this.goBack());
    }
  }
}
