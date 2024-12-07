import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsDetailComponent } from './operations-detail.component';

describe('OperationsDetailComponent', () => {
  let component: OperationsDetailComponent;
  let fixture: ComponentFixture<OperationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
