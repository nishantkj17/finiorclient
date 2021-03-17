import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityReturnCreateFormComponent } from './equity-return-create-form.component';

describe('EquityReturnCreateFormComponent', () => {
  let component: EquityReturnCreateFormComponent;
  let fixture: ComponentFixture<EquityReturnCreateFormComponent>;

  beforeEach(async(() => {
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
