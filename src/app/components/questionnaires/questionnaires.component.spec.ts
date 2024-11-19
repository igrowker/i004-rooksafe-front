import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairesComponent } from './questionnaires.component';

describe('QuestionnairesComponent', () => {
  let component: QuestionnairesComponent;
  let fixture: ComponentFixture<QuestionnairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionnairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
