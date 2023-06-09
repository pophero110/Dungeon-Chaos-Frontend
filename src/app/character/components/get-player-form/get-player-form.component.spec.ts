import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPlayerFormComponent } from './get-player-form.component';
import { CharacterModule } from '../../character.module';
import { provideStore } from '@ngrx/store';

describe('GetPlayerFormComponent', () => {
  let component: GetPlayerFormComponent;
  let fixture: ComponentFixture<GetPlayerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CharacterModule],
      providers: [provideStore()],
    });
    fixture = TestBed.createComponent(GetPlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
