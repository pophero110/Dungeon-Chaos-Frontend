import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySlotsComponent } from './inventory-slots.component';
import { provideMockStore } from '@ngrx/store/testing';
import { InventoryModule } from '../../inventory.module';
import { fakeInventoryItemWeapon } from 'src/app/test/fakeState';
import { By } from '@angular/platform-browser';

describe('InventorySlotsComponent', () => {
  let component: InventorySlotsComponent;
  let fixture: ComponentFixture<InventorySlotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InventoryModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(InventorySlotsComponent);
    component = fixture.componentInstance;
    component.inventoryItems = [
      fakeInventoryItemWeapon,
      fakeInventoryItemWeapon,
      fakeInventoryItemWeapon,
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 inventory slots', () => {
    const inventorySlotsElement = fixture.debugElement.queryAll(
      By.css('.inventorySlots__slot')
    );
    console.log(inventorySlotsElement);
    expect(inventorySlotsElement.length).toEqual(3);
  });
});
