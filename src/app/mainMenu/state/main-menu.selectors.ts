import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainMenuState } from './main-menu.reducer';

const selectMainMenuState = createFeatureSelector<MainMenuState>('mainMenu');

export const selectIsMainMenuShown = createSelector(
  selectMainMenuState,
  (state) => state.isMainMenuShown
);

export const selectIsCharacterFormShown = createSelector(
  selectMainMenuState,
  (state) => state.isCharacterFormShown
);

export const selectIsGameOver = createSelector(
  selectMainMenuState,
  (state) => state.isGameOver
);
