import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState';
import { RecipientService } from '../recipient.service';
import * as recipientSelectors from "../state/recipient.selectors";

@Component({
  selector: 'app-recipients-edit',
  templateUrl: './recipients-edit.component.html',
  styleUrls: ['./recipients-edit.component.css']
})
export class RecipientsEditComponent implements OnInit {

  recipientForm: FormGroup;
  isNewRecipient: boolean;
  recipientId: any;

  departments = [ // TODO update to http get call
    { id: 1, value: 'CM Acc Rec/Insolvency' },
    { id: 2, value: 'CM Collections' },
    { id: 3, value: 'Complaint Escalations' },
    { id: 4, value: 'Complaints' },
    { id: 5, value: 'Contact' },
    { id: 6, value: 'COT/Trace' },
    { id: 7, value: 'Direct Admin' },
    { id: 8, value: 'Direct Sales' },
    { id: 9, value: 'Enterprise Billing' },
    { id: 10, value: 'Escalated Debts' },
    { id: 11, value: 'Ledger' },
    { id: 12, value: 'N/A' },
    { id: 13, value: 'On/Off Boarding' },
    { id: 14, value: 'Operations Team Leaders' },
    { id: 15, value: 'Renewals' },
    { id: 16, value: 'Smart Metering' },
    { id: 17, value: 'Support' },
    { id: 18, value: 'Workflow' }
  ]

  constructor(private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipientsService: RecipientService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.recipientId = this.activatedRoute.snapshot.params['id'];
    this.isNewRecipient = this.recipientId === 'new';
    this.buildForm();
    if (!this.isNewRecipient) {
      this.getRecipient();
    }
  }

  getRecipient(): void {
    this.store.select(recipientSelectors.getRecipientById(this.recipientId))
      .subscribe((result) => {
        if (result) {
          this.recipientForm.patchValue(result);
        }
      });
  }

  buildForm(): void {
    this.recipientForm = this.fb.group({
      id: [null],
      EmailAddress: ['', [Validators.required, Validators.email]],
      Department: ['', Validators.required]
    })
  }

  goBack(): void {
    this.router.navigate(['recipients']);
  }

  saveRecipient(): void {
    if (this.isNewRecipient) {
      const recipientToCreate = {
        EmailAddress: this.recipientForm.get('EmailAddress').value,
        Department: this.recipientForm.get('Department').value
      };
      this.recipientsService.addRecipient(recipientToCreate).subscribe(() => this.goBack());
    } else {
      const recipientToUpdate = { ...this.recipientForm.value };
      this.recipientsService.updateRecipient(recipientToUpdate, this.recipientId)
        .subscribe(() => this.goBack());
    }
  }
}