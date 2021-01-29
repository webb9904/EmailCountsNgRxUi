import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusionsEditComponent } from './exclusions-edit.component';

describe('ExclusionsEditComponent', () => {
  let component: ExclusionsEditComponent;
  let fixture: ComponentFixture<ExclusionsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusionsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
