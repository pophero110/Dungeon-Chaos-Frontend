import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BoardModule } from './board/board.module';
import { CharacterModule } from './character/character.module';
import { FightModule } from './fight/fight.module';
import { PlayerModule } from './player/player.module';
import { InventoryModule } from './inventory/inventory.module';
import { RewardModule } from './reward/reward.module';
import { ItemModule } from './item/item.module';
import { MainMenuModule } from './mainMenu/main-menu.module';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule,
        HttpClientModule,
        CharacterModule,
        BoardModule,
        FightModule,
        PlayerModule,
        InventoryModule,
        RewardModule,
        ItemModule,
        MainMenuModule,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
