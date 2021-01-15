import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountsShellComponent } from './counts-shell.component';

describe('CountsShellComponent', () => {
  let component: CountsShellComponent;
  let fixture: ComponentFixture<CountsShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountsShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
