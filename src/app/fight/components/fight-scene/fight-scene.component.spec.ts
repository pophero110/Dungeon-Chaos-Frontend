import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightSceneComponent } from './fight-scene.component';

describe('FightSceneComponent', () => {
  let component: FightSceneComponent;
  let fixture: ComponentFixture<FightSceneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FightSceneComponent]
    });
    fixture = TestBed.createComponent(FightSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
