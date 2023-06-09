import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenDisplayerComponent } from './token-displayer.component';

describe('TokenDisplayerComponent', () => {
  let component: TokenDisplayerComponent;
  let fixture: ComponentFixture<TokenDisplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenDisplayerComponent]
    });
    fixture = TestBed.createComponent(TokenDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
