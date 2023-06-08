import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectIsGameOver,
  selectIsMainMenuShown,
} from '../../state/main-menu.selectors';
import { hideMainMenu } from '../../state/main-menu.actions';
import { hideGameOver } from '../../state/main-menu.actions';

@Component({
  selector: 'app-main-menu-container',
  templateUrl: './main-menu-container.component.html',
  styleUrls: ['./main-menu-container.component.scss'],
})
export class MainMenuContainerComponent {
  isShown$ = this.store.select(selectIsMainMenuShown);
  isGameOver$ = this.store.select(selectIsGameOver);
  audio!: HTMLAudioElement;
  constructor(private store: Store) {
    this.audio = new Audio('/assets/music/mainMenu.mp3');
  }

  onStartGameButtonClick() {
    this.store.dispatch(hideMainMenu());
    this.audio.play();
  }

  onRestartGameButtonClick() {
    this.store.dispatch(hideGameOver());
    this.audio.play();
  }
}
