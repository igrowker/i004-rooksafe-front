import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseDialogComponent } from './response-dialog.component';

describe('ResponseDialogComponent', () => {
  let component: ResponseDialogComponent;
  let fixture: ComponentFixture<ResponseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
