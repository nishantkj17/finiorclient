import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MfIndividualInvestmentReportComponent } from './mf-individual-investment-report.component';

describe('MfIndividualInvestmentReportComponent', () => {
  let component: MfIndividualInvestmentReportComponent;
  let fixture: ComponentFixture<MfIndividualInvestmentReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MfIndividualInvestmentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfIndividualInvestmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
