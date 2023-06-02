import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { boardReducer } from './board/state/board.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './board/state/board.effects';
import { CharacterModule } from './character/character.module';
import { characterReducer } from './character/character/character.reducer';
import { CharacterEffects } from './character/character/character.effects';
import { BoardModule } from './board/board.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ board: boardReducer, character: characterReducer }),
    EffectsModule.forRoot([BookEffects, CharacterEffects]),
    HttpClientModule,
    CharacterModule,
    BoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
