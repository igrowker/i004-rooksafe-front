import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorTestComponent } from './investor-test.component';

describe('InvestorTestComponent', () => {
  let component: InvestorTestComponent;
  let fixture: ComponentFixture<InvestorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
