import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProvidentFundCreateFormComponent } from './provident-fund-create-form.component';

describe('ProvidentFundCreateFormComponent', () => {
  let component: ProvidentFundCreateFormComponent;
  let fixture: ComponentFixture<ProvidentFundCreateFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidentFundCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidentFundCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
