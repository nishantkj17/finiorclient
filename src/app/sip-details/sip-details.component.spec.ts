import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SipDetailsComponent } from './sip-details.component';

describe('SipDetailsComponent', () => {
  let component: SipDetailsComponent;
  let fixture: ComponentFixture<SipDetailsComponent>; 

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
