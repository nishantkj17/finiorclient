import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SipDetailsFundComponent } from './sip-details-fund.component';

describe('SipDetailsFundComponent', () => {
  let component: SipDetailsFundComponent;
  let fixture: ComponentFixture<SipDetailsFundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SipDetailsFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SipDetailsFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
