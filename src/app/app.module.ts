import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { boardReducer } from './board/state/board.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharacterModule } from './character/character.module';
import { BoardModule } from './board/board.module';
import { PlayerEffects } from './player/state/player.effects';
import { playerReducer } from './player/state/player.reducer';
import { BoardEffects } from './board/state/board.effects';
import { CharacterEffects } from './character/state/character.effects';
import { characterReducer } from './character/state/character.reducer';
import { FightEffects } from './fight/state/fight.effects';
import { fightReducer } from './fight/state/fight.reducer';
import { FightModule } from './fight/fight.module';
import { PlayerModule } from './player/player.module';
import { InventoryModule } from './inventory/inventory.module';
import { inventoryReducer } from './inventory/state/inventory.reducer';
import { InventoryEffects } from './inventory/state/inventory.effects';
import { RewardModule } from './reward/reward.module';
import { rewardReducer } from './reward/state/reward.reducer';
import { RewardEffects } from './reward/state/reward.effects';
import { ItemModule } from './item/item.module';
import { ItemEffects } from './item/state/item.effects';
import { itemReducer } from './item/state/item.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      board: boardReducer,
      character: characterReducer,
      player: playerReducer,
      fight: fightReducer,
      inventory: inventoryReducer,
      reward: rewardReducer,
      item: itemReducer,
    }),
    EffectsModule.forRoot([
      BoardEffects,
      CharacterEffects,
      PlayerEffects,
      FightEffects,
      InventoryEffects,
      RewardEffects,
      ItemEffects,
    ]),
    HttpClientModule,
    CharacterModule,
    BoardModule,
    FightModule,
    PlayerModule,
    InventoryModule,
    RewardModule,
    ItemModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
