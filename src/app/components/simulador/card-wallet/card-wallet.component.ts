import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-card-wallet',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './card-wallet.component.html',
  styleUrl: './card-wallet.component.css'
})
export class CardWalletComponent {
  @Input() investments: any[] = [];
  @Output() investmentChanged = new EventEmitter<any>();
  filteredInvestments: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['investments']) {
      this.filteredInvestments = this.investments.filter(stock => stock.number_of_shares > 0);
    }
  }

  emitInvestmentChange(investment: any) {
    this.investmentChanged.emit(investment);
  }
}