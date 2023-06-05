import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterContainerComponent } from './character-container.component';
import { StoreModule } from '@ngrx/store';
import { CharacterModule } from '../../character.module';

describe('CharacterContainerComponent', () => {
  let component: CharacterContainerComponent;
  let fixture: ComponentFixture<CharacterContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterContainerComponent],
      imports: [StoreModule.forRoot({}), CharacterModule],
    });
    fixture = TestBed.createComponent(CharacterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
