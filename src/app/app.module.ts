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
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      board: boardReducer,
      character: characterReducer,
      player: playerReducer,
      fight: fightReducer,
    }),
    EffectsModule.forRoot([
      BoardEffects,
      CharacterEffects,
      PlayerEffects,
      FightEffects,
    ]),
    HttpClientModule,
    CharacterModule,
    BoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
