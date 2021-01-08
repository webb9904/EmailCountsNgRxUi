import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientsEditComponent } from './recipients-edit.component';

describe('RecipientsEditComponent', () => {
  let component: RecipientsEditComponent;
  let fixture: ComponentFixture<RecipientsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
