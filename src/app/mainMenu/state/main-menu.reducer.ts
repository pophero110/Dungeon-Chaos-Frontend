import { createReducer, on } from '@ngrx/store';
import {
  hideGameOver,
  hideMainMenu,
  showGameOver,
  showMainMenu,
} from './main-menu.actions';

export interface MainMenuState {
  isMainMenuShown: boolean;
  isGameOver: boolean;
}

const initialState: MainMenuState = {
  isMainMenuShown: true,
  isGameOver: false,
};

export const mainMenuReducer = createReducer(
  initialState,
  on(showMainMenu, (state) => {
    return { ...state, isMainMenuShown: true };
  }),
  on(hideMainMenu, (state) => {
    return { ...state, isMainMenuShown: false };
  }),
  on(showGameOver, (state) => {
    return { ...state, isGameOver: true };
  }),
  on(hideGameOver, (state) => {
    return { ...state, isGameOver: false };
  })
);
