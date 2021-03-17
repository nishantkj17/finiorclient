import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundReturnCreateFormComponent } from './mutual-fund-return-create-form.component';

describe('MutualFundReturnCreateFormComponent', () => {
  let component: MutualFundReturnCreateFormComponent;
  let fixture: ComponentFixture<MutualFundReturnCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualFundReturnCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundReturnCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
