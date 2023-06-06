import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ActionType } from '../../fight.model';
import { playerPerformAction } from '../../state/fight.actions';
import { FightContainerComponent } from './fight-container.component';
import {
  fakeFightState,
  fakeOpponent,
  fakePlayerState,
} from 'src/app/test/fakeState';
import { FightModule } from '../../fight.module';

describe('FightContainerComponent', () => {
  let component: FightContainerComponent;
  let fixture: ComponentFixture<FightContainerComponent>;
  let store: MockStore;

  const initialState = {
    fight: fakeFightState,
    player: fakePlayerState,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(FightContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should select isFighting from the store', () => {
    component.isFighting$.subscribe((isFighting) => {
      expect(isFighting).toBe(true);
    });
  });

  it('should select opponent from the store', () => {
    component.opponent$.subscribe((opponent) => {
      expect(opponent).toEqual(fakeOpponent);
    });
  });

  it('should select opponentTurn from the store', () => {
    component.opponentTurn$.subscribe((opponentTurn) => {
      expect(opponentTurn).toBe(false);
    });
  });

  it('should select player from the store', () => {
    component.player$.subscribe((player) => {
      expect(player).toEqual(fakePlayerState);
    });
  });

  it('should dispatch playerPerformAction when onPerformAction is called', () => {
    const actionType: ActionType = ActionType.ATTACK;
    const dispatchSpy = spyOn(store, 'dispatch');

    component.onPerformAction(actionType);

    expect(dispatchSpy).toHaveBeenCalledWith(
      playerPerformAction({ actionType })
    );
  });
});
