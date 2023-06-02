import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BoardComponent } from './board/board.component';
import { boardReducer } from './state/board/board.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/board/board.effects';
import { SvgModule } from './svg/svg.module';
import { CharacterModule } from './character/character.module';
import { characterReducer } from './state/character/character.reducer';
import { CharacterEffects } from './state/character/character.effects';

@NgModule({
  declarations: [AppComponent, BoardComponent],
  imports: [
    BrowserModule,

    StoreModule.forRoot({ board: boardReducer, character: characterReducer }),
    EffectsModule.forRoot([BookEffects, CharacterEffects]),
    HttpClientModule,
    SvgModule,
    CharacterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
