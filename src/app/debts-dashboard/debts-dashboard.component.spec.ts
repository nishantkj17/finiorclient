import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DebtsDashboardComponent } from './debts-dashboard.component';

describe('DebtsDashboardComponent', () => {
  let component: DebtsDashboardComponent;
  let fixture: ComponentFixture<DebtsDashboardComponent>;

  beforeEach(waitForAsync(() => {
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
