import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { TileComponent } from './tile.component';
import { By } from '@angular/platform-browser';
import { BoardModule } from '../../board.module';
import { CharacterName } from 'src/app/character/character.model';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;
  let mockOnTileClick: jasmine.Spy;
  const playerId = 1;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardModule, StoreModule.forRoot({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    mockOnTileClick = jasmine.createSpy('handleTileClick');
    component.onTileClick = mockOnTileClick;
    component.currentPlayerPosition = 2;
    component.playerId = playerId;
    component.tileType = 'P!';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the path token when the tile type is "P!"', () => {
    component.tileType = 'P!';
    fixture.detectChanges();
    const pathTokenElement = fixture.debugElement.query(
      By.css('app-path-token')
    );
    expect(pathTokenElement).toBeTruthy();
  });

  it('should call handleTileClick when the tile is clicked', () => {
    component.tileType = 'P';
    component.position = 1;
    const tileElement: HTMLElement = fixture.nativeElement.querySelector('div');
    tileElement.click();
    expect(mockOnTileClick).toHaveBeenCalledWith('P', 1, playerId);
  });

  it('should display the warrior token when the player character name is "Warrior"', () => {
    component.position = 2;
    component.playerCharacterName = CharacterName.Warrior;
    fixture.detectChanges();
    const warriorTokenElement = fixture.debugElement.query(
      By.css('app-warrior-token')
    );
    expect(warriorTokenElement).toBeTruthy();
  });

  it('should display the warrior token when the player character name is "Rogue"', () => {
    component.position = 2;
    component.playerCharacterName = CharacterName.Rogue;
    fixture.detectChanges();
    const rogueTokenElement = fixture.debugElement.query(
      By.css('app-rogue-token')
    );
    expect(rogueTokenElement).toBeTruthy();
  });
});
