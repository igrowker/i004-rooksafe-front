import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { CardComponent } from 'src/app/components/card/card.component';
import { AuthService } from 'src/app/services/auth-service';
import { RecomendationService } from 'src/app/services/recomendation.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, CardComponent, CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  completedTest: boolean = false;
  recomendationCards: any[] = [];
  userProfile: any = null;
  dataProfile: any = null;

  constructor(
    private recomendationService: RecomendationService,
    private _authService: AuthService
  ) {
    if (this._authService.isRunningInBrowser()) {
      const dataProfile = sessionStorage.getItem('usr');
      if (dataProfile !== null) {
        this.userProfile = JSON.parse(dataProfile);
      }
    }
  }
  ngOnInit(): void {
    this.getRecomendationCards();
    this.checkTestCompleted();
  }
  getRecomendationCards(): void {
    this.recomendationService.getRecomendations().subscribe((cards) => {
      this.recomendationCards = cards;
    });
  }
  checkTestCompleted(): void {
    if (this._authService.isRunningInBrowser()) {
      const testCompleted = sessionStorage.getItem('testCompleted');
      this.completedTest = testCompleted === 'true';
    }
  }
}
