import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvestmentSavingsDetailsComponent } from './investment-savings-details.component';

describe('InvestmentSavingsDetailsComponent', () => {
  let component: InvestmentSavingsDetailsComponent;
  let fixture: ComponentFixture<InvestmentSavingsDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentSavingsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentSavingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
