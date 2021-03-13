import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SipEditViewComponent } from './sip-edit-view.component';

describe('SipEditViewComponent', () => {
  let component: SipEditViewComponent;
  let fixture: ComponentFixture<SipEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SipEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SipEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
