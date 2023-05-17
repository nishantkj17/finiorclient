import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FundHouseIconComponent } from './fund-house-icon.component';

describe('FundHouseIconComponent', () => {
  let component: FundHouseIconComponent;
  let fixture: ComponentFixture<FundHouseIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FundHouseIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundHouseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
