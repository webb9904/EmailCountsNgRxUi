import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusionsTableComponent } from './exclusions-table.component';

describe('ExclusionsTableComponent', () => {
  let component: ExclusionsTableComponent;
  let fixture: ComponentFixture<ExclusionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
