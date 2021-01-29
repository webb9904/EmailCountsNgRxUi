import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusionsListComponent } from './exclusions-list.component';

describe('ExclusionsListComponent', () => {
  let component: ExclusionsListComponent;
  let fixture: ComponentFixture<ExclusionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
