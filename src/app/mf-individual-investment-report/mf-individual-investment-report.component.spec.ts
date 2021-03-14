import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfIndividualInvestmentReportComponent } from './mf-individual-investment-report.component';

describe('MfIndividualInvestmentReportComponent', () => {
  let component: MfIndividualInvestmentReportComponent;
  let fixture: ComponentFixture<MfIndividualInvestmentReportComponent>;

  beforeEach(async(() => {
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
