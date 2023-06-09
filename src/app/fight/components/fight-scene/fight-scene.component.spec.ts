import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FightSceneComponent } from './fight-scene.component';
import { StoreModule } from '@ngrx/store';
import { FightModule } from '../../fight.module';
import { fakeOpponent } from 'src/app/test/fakeState';
import { By } from '@angular/platform-browser';

describe('FightSceneComponent', () => {
  let component: FightSceneComponent;
  let fixture: ComponentFixture<FightSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), FightModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightSceneComponent);
    component = fixture.componentInstance;
    component.opponent = fakeOpponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render opponent section with opponent token and details', () => {
    component.opponent = fakeOpponent;
    fixture.detectChanges();

    const opponentTokenElement = fixture.debugElement.query(
      By.css('.fightScene__opponent__token app-golblin-token')
    );
    const opponentNameElement = fixture.debugElement.query(
      By.css('.fightScene__opponent ul li:nth-child(1) p')
    );
    const opponentHealthElement = fixture.debugElement.query(
      By.css('.fightScene__opponent ul li:nth-child(2) p')
    );

    expect(opponentTokenElement).toBeTruthy();
    expect(opponentHealthElement.nativeElement.textContent).toContain(
      fakeOpponent.health
    );
    expect(opponentNameElement.nativeElement.textContent).toContain(
      fakeOpponent.name
    );
  });

  it('should render player panel', () => {
    const playerPanelElement = fixture.debugElement.query(
      By.css('app-player-panel')
    );
    console.log(playerPanelElement);
    expect(playerPanelElement).toBeTruthy();
  });

  it("should apply the fightScene__turnIndicator class to the opponent section when it is the opponent's turn", () => {
    component.isOpponentTurn = true;
    fixture.detectChanges();

    const opponentSectionElement = fixture.debugElement.query(
      By.css('.fightScene__opponent')
    );
    expect(
      opponentSectionElement.nativeElement.classList.contains(
        'fightScene__turnIndicator'
      )
    ).toBeTruthy();
  });

  it("should apply the fightScene__turnIndicator class to the player section when it is not the opponent's turn", () => {
    component.isOpponentTurn = false;
    fixture.detectChanges();

    const playerSectionElement = fixture.debugElement.query(
      By.css('.fightScene__player')
    );
    expect(
      playerSectionElement.nativeElement.classList.contains(
        'fightScene__turnIndicator'
      )
    ).toBeTruthy();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
