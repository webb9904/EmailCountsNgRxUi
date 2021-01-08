import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientsTableComponent } from './recipients-table.component';

describe('RecipientsTableComponent', () => {
  let component: RecipientsTableComponent;
  let fixture: ComponentFixture<RecipientsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
