import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FightActionComponent } from './fight-action.component';
import { FightModule } from '../../fight.module';
import { StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';

describe('FightActionComponent', () => {
  let component: FightActionComponent;
  let fixture: ComponentFixture<FightActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FightModule, StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(FightActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render player actions when it is not opponent turn', () => {
    component.isOpponentTurn = false;
    fixture.detectChanges();

    const playerActionsElement = fixture.debugElement.query(
      By.css('.playerActions')
    );
    expect(playerActionsElement).toBeTruthy();
  });
});
