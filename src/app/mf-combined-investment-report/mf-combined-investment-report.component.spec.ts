import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MfCombinedInvestmentReportComponent } from './mf-combined-investment-report.component';

describe('MfCombinedInvestmentReportComponent', () => {
  let component: MfCombinedInvestmentReportComponent;
  let fixture: ComponentFixture<MfCombinedInvestmentReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MfCombinedInvestmentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfCombinedInvestmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
