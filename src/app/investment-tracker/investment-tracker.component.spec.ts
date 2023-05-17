import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvestmentTrackerComponent } from './investment-tracker.component';

describe('InvestmentTrackerComponent', () => {
  let component: InvestmentTrackerComponent;
  let fixture: ComponentFixture<InvestmentTrackerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
