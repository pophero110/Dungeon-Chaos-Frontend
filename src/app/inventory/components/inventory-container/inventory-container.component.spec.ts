import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryContainerComponent } from './inventory-container.component';
import { InventoryModule } from '../../inventory.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { fakeInventoryItemWeapon } from 'src/app/test/fakeState';
import { Store } from '@ngrx/store';
import {
  equipArmor,
  equipWeapon,
  unequipArmor,
  unequipWeapon,
} from '../../state/inventory.actions';
import { fakeInventoryItemArmor } from 'src/app/test/fakeState';

describe('InventoryContainerComponent', () => {
  let component: InventoryContainerComponent;
  let fixture: ComponentFixture<InventoryContainerComponent>;
  let store: MockStore;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InventoryModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(InventoryContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispathc equipWeapon action when invoking OnItemEquipButtonClick with weapon ', () => {
    spyOn(store, 'dispatch');
    component.onItemEquipButtonClick(fakeInventoryItemWeapon);
    expect(store.dispatch).toHaveBeenCalledWith(
      equipWeapon({ inventoryItemId: fakeInventoryItemWeapon.id })
    );
  });
  it('should dispathc unequipWeapon action when invoking OnItemEquipButtonClick with weapon', () => {
    spyOn(store, 'dispatch');
    component.onItemUnequipButtonClick(fakeInventoryItemWeapon);
    expect(store.dispatch).toHaveBeenCalledWith(
      unequipWeapon({ inventoryItemId: fakeInventoryItemWeapon.id })
    );
  });
  it('should dispathc equipArmor action when invoking OnItemEquipButtonClick with armor', () => {
    spyOn(store, 'dispatch');
    component.onItemEquipButtonClick(fakeInventoryItemArmor);
    expect(store.dispatch).toHaveBeenCalledWith(
      equipArmor({ inventoryItemId: fakeInventoryItemArmor.id })
    );
  });
  it('should dispathc unequipArmor action when invoking OnItemEquipButtonClick with armor', () => {
    spyOn(store, 'dispatch');
    component.onItemUnequipButtonClick(fakeInventoryItemArmor);
    expect(store.dispatch).toHaveBeenCalledWith(
      unequipArmor({ inventoryItemId: fakeInventoryItemArmor.id })
    );
  });
});
