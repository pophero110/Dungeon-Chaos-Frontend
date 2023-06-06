import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterPanelComponent } from './character-panel.component';
import { CharacterModule } from '../../character.module';
import { fakeCharacter } from 'src/app/test/fakeState';
import { By } from '@angular/platform-browser';

describe('CharacterPanelComponent', () => {
  let component: CharacterPanelComponent;
  let fixture: ComponentFixture<CharacterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display selected character token', () => {
    component.selectedCharacter = fakeCharacter;
    fixture.detectChanges();
    const warriroTokenElement = fixture.debugElement.query(
      By.css('app-warrior-token')
    );
    expect(warriroTokenElement).toBeTruthy();
  });

  it('should display only one character token', () => {
    component.selectedCharacter = fakeCharacter;
    fixture.detectChanges();
    const characterTokenElement = fixture.debugElement.query(
      By.css('.characterPanel__token')
    );
    expect(characterTokenElement.children.length).toEqual(1);
  });

  afterEach(() => {
    fixture.destroy();
  });
});
