import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtEntryFormComponent } from './debt-entry-form.component';

describe('DebtEntryFormComponent', () => {
  let component: DebtEntryFormComponent;
  let fixture: ComponentFixture<DebtEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
