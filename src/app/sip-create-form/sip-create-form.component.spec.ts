import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SipCreateFormComponent } from './sip-create-form.component';

describe('SipCreateFormComponent', () => {
  let component: SipCreateFormComponent;
  let fixture: ComponentFixture<SipCreateFormComponent>;

  beforeEach(async(() => {
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
