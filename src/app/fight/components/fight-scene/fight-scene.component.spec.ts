import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FightSceneComponent } from './fight-scene.component';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { playerPerformAction } from '../../state/fight.actions';
import { ActionType } from '../../fight.model';
import { FightModule } from '../../fight.module';

describe('FightSceneComponent', () => {
  let component: FightSceneComponent;
  let fixture: ComponentFixture<FightSceneComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), FightModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightSceneComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch playerPerformAction', () => {
    spyOn(store, 'dispatch').and.callThrough();
    const actionType = ActionType.ATTACK;
    component.handlePerformAction(actionType);
    expect(store.dispatch).toHaveBeenCalledWith(
      playerPerformAction({ actionType })
    );
  });

  // it('should set opponentTurn to true', () => {
  //   component.handlePerformAction(ActionType.ATTACK);
  //   expect(component.opponentTurn).toBeTrue();
  // });

  afterEach(() => {
    fixture.destroy();
  });
});
