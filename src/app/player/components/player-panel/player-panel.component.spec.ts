import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerPanelComponent } from './player-panel.component';
import { provideMockStore } from '@ngrx/store/testing';
import { PlayerModule } from '../../player.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { fakePlayerState } from 'src/app/test/fakeState';

describe('PlayerPanelComponent', () => {
  let component: PlayerPanelComponent;
  let fixture: ComponentFixture<PlayerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPanelComponent);
    component = fixture.componentInstance;
    component.player = { ...fakePlayerState };
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render player character token based on player character name', () => {
    const warriorTokenElement: DebugElement = fixture.debugElement.query(
      By.css('app-warrior-token')
    );
    expect(warriorTokenElement).toBeTruthy();
  });
});
