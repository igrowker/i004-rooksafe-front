import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { TestProgressComponent } from 'src/app/utils/test-progress/test-progress.component';
export interface TestArray {
  question: string;
  options: string[];
}
@Component({
  selector: 'app-questionnaires',
  standalone: true,
  imports: [MaterialModule, CommonModule, TestProgressComponent],
  templateUrl: './questionnaires.component.html',
  styleUrl: './questionnaires.component.css',
})
export class QuestionnairesComponent {
  @Input() tests: TestArray[] = [];
  @Output() testCompleted = new EventEmitter<any>();

  questionIndex = 0;
  answers: number[] = [];

  nextQuestion(selectedAnswer: number) {
    this.answers[this.questionIndex] = selectedAnswer;
    if (this.questionIndex < this.tests.length - 1) {
      this.questionIndex++;
    } else {
      this.testCompleted.emit(this.answers);
    }
  }
}
