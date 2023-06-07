import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerContainerComponent } from './player-container.component';
import {
  selectIsPlayerCreated,
  selectPlayerState,
} from '../../state/player.selectors';
import { PlayerModule } from '../../player.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { fakePlayerState } from 'src/app/test/fakeState';

describe('PlayerContainerComponent', () => {
  let component: PlayerContainerComponent;
  let fixture: ComponentFixture<PlayerContainerComponent>;
  let store: MockStore;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlayerModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(PlayerContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Store Test', () => {
    it('should select isPlayerCreated from the store', () => {
      store.overrideSelector(selectIsPlayerCreated, false);

      fixture.detectChanges();

      component.isPlayerCreated$.subscribe((isPlayerCreated) => {
        expect(isPlayerCreated).toEqual(false);
      });
    });

    it('should select player state from the store', () => {
      store.overrideSelector(selectPlayerState, fakePlayerState);
      component.player$.subscribe((player) => {
        expect(player).toEqual(fakePlayerState);
      });
    });
  });

  it('should not render player panel when isPlayerCreated is false', () => {
    store.overrideSelector(selectIsPlayerCreated, false);
    fixture.detectChanges();
    const playerPanelElement =
      fixture.nativeElement.querySelector('app-player-panel');

    expect(playerPanelElement).toBeNull();
  });
});
