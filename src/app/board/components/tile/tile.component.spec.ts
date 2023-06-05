import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { TileComponent } from './tile.component';
import { By } from '@angular/platform-browser';
import { BoardModule } from '../../board.module';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;
  let mockHandleTileClick: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardModule, StoreModule.forRoot({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    mockHandleTileClick = jasmine.createSpy('handleTileClick');
    component.handleTileClick = mockHandleTileClick;
    component.tileType = 'P';
    component.position = 1;
    component.currentPlayerPosition = 2;
    component.playerCharacterName = 'Warrior';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleTileClick when the tile is clicked', () => {
    const tileElement: HTMLElement = fixture.nativeElement.querySelector('div');
    tileElement.click();
    expect(mockHandleTileClick).toHaveBeenCalledWith('P', 1);
  });

  it('should display the warrior token when the player character name is "Warrior"', () => {
    component.position = 2;
    fixture.detectChanges();
    const warriorTokenElement = fixture.debugElement.query(
      By.css('app-warrior-token')
    );
    expect(warriorTokenElement).toBeTruthy();
  });

  it('should display the warrior token when the player character name is "Rogue"', () => {
    component.playerCharacterName = 'Rogue';
    fixture.detectChanges();
    const rogueTokenElement = fixture.debugElement.query(
      By.css('app-rogue-token')
    );
    expect(rogueTokenElement).toBeTruthy();
  });

  it('should display only one the warrior token representing player', () => {
    component.position = 2;
    fixture.detectChanges();
    const warriorTokenElements = fixture.debugElement.queryAll(
      By.css('app-warrior-token')
    );
    expect(warriorTokenElements.length).toBe(1);
  });

  it('should display the path token when the tile type is "P"', () => {
    const pathTokenElement = fixture.debugElement.query(
      By.css('app-path-token')
    );
    expect(pathTokenElement).toBeTruthy();
  });
});
