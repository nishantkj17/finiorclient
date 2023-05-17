import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EquityReturnCreateFormComponent } from './equity-return-create-form.component';

describe('EquityReturnCreateFormComponent', () => {
  let component: EquityReturnCreateFormComponent;
  let fixture: ComponentFixture<EquityReturnCreateFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityReturnCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityReturnCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
