import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelicBladeComponent } from './relic-blade.component';

describe('RelicBladeComponent', () => {
  let component: RelicBladeComponent;
  let fixture: ComponentFixture<RelicBladeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelicBladeComponent]
    });
    fixture = TestBed.createComponent(RelicBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
