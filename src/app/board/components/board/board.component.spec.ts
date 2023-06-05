import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { BoardComponent } from './board.component';
import { fetchBoard, makeMove } from '../../state/board.actions';
import {
  selectBoard,
  selectCurrentPlayerPosition,
} from '../../state/board.selectors';
import { selectPlayerCharacterName } from 'src/app/player/state/player.selectors';
import { startFight } from 'src/app/fight/state/fight.actions';
import { fakeBoard, fakePlayerState } from 'src/app/test/fakeState';
import { BoardModule } from '../../board.module';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let store: MockStore;

  const fakeCurrentPlayerPosition = 1;
  const fakePlayerCharacterName = 'Warrior';

  const initialState = {
    board: fakeBoard,
    player: fakePlayerState,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), BoardModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(Store) as MockStore;
    store.overrideSelector(selectBoard, fakeBoard);
    store.overrideSelector(
      selectCurrentPlayerPosition,
      fakeCurrentPlayerPosition
    );
    store.overrideSelector(selectPlayerCharacterName, fakePlayerCharacterName);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch fetchBoard action on ngOnInit', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(fetchBoard());
  });

  it('should dispatch makeMove action when tile is clicked and it is a valid move', () => {
    spyOn(store, 'dispatch');
    const tile = 'P';
    const position = 1;
    const currentPlayerPosition = 0;
    component.handleTileClick(tile, position, currentPlayerPosition);
    expect(store.dispatch).toHaveBeenCalledWith(makeMove({ position }));
  });

  it('should dispatch startFight action when monster tile is clicked', () => {
    spyOn(store, 'dispatch');
    const tile = 'M';
    const position = 1;
    const currentPlayerPosition = 0;
    component.handleTileClick(tile, position, currentPlayerPosition);
    expect(store.dispatch).toHaveBeenCalledWith(
      startFight({ monsterId: 1, opponentPosition: position })
    );
  });
});
