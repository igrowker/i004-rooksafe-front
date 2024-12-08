import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWalletComponent } from './card-wallet.component';

describe('CardWalletComponent', () => {
  let component: CardWalletComponent;
  let fixture: ComponentFixture<CardWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
