import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SipCreateFormComponent } from './sip-create-form.component';

describe('SipCreateFormComponent', () => {
  let component: SipCreateFormComponent;
  let fixture: ComponentFixture<SipCreateFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SipCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SipCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
