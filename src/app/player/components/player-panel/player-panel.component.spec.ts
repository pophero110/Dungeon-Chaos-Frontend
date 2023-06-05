import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerPanelComponent } from './player-panel.component';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {
  selectIsPlayerCreated,
  selectPlayerState,
} from '../../state/player.selectors';
import { fakePlayerState } from 'src/app/test/fakeState';
import { PlayerModule } from '../../player.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PlayerPanelComponent', () => {
  let component: PlayerPanelComponent;
  let fixture: ComponentFixture<PlayerPanelComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPanelComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should select player state from the store', () => {
    store.overrideSelector(selectPlayerState, fakePlayerState);

    fixture.detectChanges();

    component.player$.subscribe((player) => {
      expect(player).toEqual(fakePlayerState);
    });
  });

  it('should select isPlayerCreated from the store', () => {
    store.overrideSelector(selectIsPlayerCreated, true);

    fixture.detectChanges();

    component.isPlayerCreated$.subscribe((isPlayerCreated) => {
      expect(isPlayerCreated).toEqual(true);
    });
  });

  it('should render player panel when player is available', () => {
    store.overrideSelector(selectIsPlayerCreated, true);
    store.overrideSelector(selectPlayerState, fakePlayerState);
    fixture.detectChanges();

    const playerPanelElement: DebugElement = fixture.debugElement.query(
      By.css('.playerPanel')
    );
    expect(playerPanelElement).toBeTruthy();
  });

  it('should render player character token when player is available', () => {
    store.overrideSelector(selectIsPlayerCreated, true);
    store.overrideSelector(selectPlayerState, fakePlayerState);
    fixture.detectChanges();

    const warriorTokenElement: DebugElement = fixture.debugElement.query(
      By.css('app-warrior-token')
    );
    expect(warriorTokenElement).toBeTruthy();
  });

  it('should not render player panel when player is not created', () => {
    store.overrideSelector(selectIsPlayerCreated, false);
    fixture.detectChanges();

    const playerPanelElement: DebugElement = fixture.debugElement.query(
      By.css('.playerPanel')
    );
    expect(playerPanelElement).toBeNull();
  });
});
