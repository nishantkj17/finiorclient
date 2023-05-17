import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SipEntryTrackerComponent } from './sip-entry-tracker.component';

describe('SipEntryTrackerComponent', () => {
  let component: SipEntryTrackerComponent;
  let fixture: ComponentFixture<SipEntryTrackerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SipEntryTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SipEntryTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
