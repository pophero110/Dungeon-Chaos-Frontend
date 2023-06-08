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
import { fakeBoard, fakePlayerState } from 'src/app/test/fakeState';
import { BoardModule } from '../../board.module';
import { startFight } from 'src/app/fight/state/fight.actions';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let store: MockStore;
  let mockClickSound: jasmine.SpyObj<HTMLAudioElement>;
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
    mockClickSound = jasmine.createSpyObj<HTMLAudioElement>('clickSound', [
      'play',
    ]);
    component.clickSound = mockClickSound;
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

  it('should render the board tiles correctly', () => {
    const boardTiles = [['P', 'S', 'E', 'M']];
    const numberOfTiles = boardTiles.flat().length;
    component.board$ = of(boardTiles);
    fixture.detectChanges();

    const tileElements = fixture.debugElement.queryAll(By.css('app-tile'));

    expect(tileElements.length).toBe(numberOfTiles);
  });

  it('should dispatch fetchBoard action on ngOnInit', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(fetchBoard());
  });

  it('should dispatch makeMove action when tileType is P', () => {
    spyOn(store, 'dispatch');
    const tileType = 'P';
    const position = 1;
    const playerId = 1;
    component.onTileClick(tileType, position, playerId);
    expect(store.dispatch).toHaveBeenCalledWith(makeMove({ position }));
  });

  it('should dispatch startFight action when tileType is M', () => {
    spyOn(store, 'dispatch');
    const tileType = 'M';
    const position = 2;
    const monsterId = 1;
    const playerId = 1;
    component.onTileClick(tileType, position, playerId);
    expect(store.dispatch).toHaveBeenCalledWith(
      startFight({ playerId, monsterId, opponentPosition: position })
    );
  });
});
