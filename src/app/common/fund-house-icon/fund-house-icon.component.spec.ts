import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundHouseIconComponent } from './fund-house-icon.component';

describe('FundHouseIconComponent', () => {
  let component: FundHouseIconComponent;
  let fixture: ComponentFixture<FundHouseIconComponent>;

  beforeEach(async(() => {
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
