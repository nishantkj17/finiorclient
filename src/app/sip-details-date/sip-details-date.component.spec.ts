import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SipDetailsDateComponent } from './sip-details-date.component';

describe('SipDetailsDateComponent', () => {
  let component: SipDetailsDateComponent;
  let fixture: ComponentFixture<SipDetailsDateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SipDetailsDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SipDetailsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
