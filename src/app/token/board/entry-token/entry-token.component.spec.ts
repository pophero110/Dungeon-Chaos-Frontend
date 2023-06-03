import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryTokenComponent } from './entry-token.component';

describe('EntryTokenComponent', () => {
  let component: EntryTokenComponent;
  let fixture: ComponentFixture<EntryTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryTokenComponent]
    });
    fixture = TestBed.createComponent(EntryTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
