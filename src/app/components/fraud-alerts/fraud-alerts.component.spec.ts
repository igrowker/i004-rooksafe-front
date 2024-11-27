import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudAlertsComponent } from './fraud-alerts.component';

describe('FraudAlertsComponent', () => {
  let component: FraudAlertsComponent;
  let fixture: ComponentFixture<FraudAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraudAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraudAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
