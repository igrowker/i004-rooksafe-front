import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationContentComponent } from './education-content.component';

describe('EducationContentComponent', () => {
  let component: EducationContentComponent;
  let fixture: ComponentFixture<EducationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
