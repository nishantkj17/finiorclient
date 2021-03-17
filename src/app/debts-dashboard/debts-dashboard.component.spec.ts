import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtsDashboardComponent } from './debts-dashboard.component';

describe('DebtsDashboardComponent', () => {
  let component: DebtsDashboardComponent;
  let fixture: ComponentFixture<DebtsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
