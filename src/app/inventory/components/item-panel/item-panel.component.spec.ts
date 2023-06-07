import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPanelComponent } from './item-panel.component';
import { provideMockStore } from '@ngrx/store/testing';
import { fakeInventoryItemWeapon } from 'src/app/test/fakeState';
import { InventoryModule } from '../../inventory.module';

describe('ItemPanelComponent', () => {
  let component: ItemPanelComponent;
  let fixture: ComponentFixture<ItemPanelComponent>;
  let mockOnItemUnequipButtonClick: jasmine.Spy;
  let mockOnItemequipButtonClick: jasmine.Spy;
  let mockOnItemPanelCloseButtonClick: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InventoryModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(ItemPanelComponent);
    component = fixture.componentInstance;
    component.selectedInventoryItem = fakeInventoryItemWeapon;
    mockOnItemPanelCloseButtonClick = jasmine.createSpy(
      'onItemPanelCloseButtonClick'
    );
    mockOnItemUnequipButtonClick = jasmine.createSpy(
      'onItemUnequipButtonClick'
    );
    mockOnItemequipButtonClick = jasmine.createSpy('onItemEquipButtonClick');
    component.onItemEquipButtonClick = mockOnItemequipButtonClick;
    component.onItemUnequipButtonClick = mockOnItemUnequipButtonClick;
    component.onItemPanelCloseButtonClick = mockOnItemPanelCloseButtonClick;
    component.selectedInventoryItem = { ...fakeInventoryItemWeapon };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onItemEquipButtonClick when selectedInventoryItem is an equipment', () => {
    const equipButton: HTMLElement = fixture.nativeElement.querySelector(
      '.inventory__itemPanel__itemActionMenu__action-equip'
    );

    equipButton.click();
    expect(mockOnItemequipButtonClick).toHaveBeenCalledWith({
      ...fakeInventoryItemWeapon,
    });
  });

  it('should invoke onItemUnequipButtonClick when selectedInventoryItem is equipped', () => {
    component.selectedInventoryItem
      ? (component.selectedInventoryItem.equipped = true)
      : null;
    fixture.detectChanges();
    const equipButton: HTMLElement = fixture.nativeElement.querySelector(
      '.inventory__itemPanel__itemActionMenu__action-unequip'
    );

    equipButton.click();
    expect(mockOnItemUnequipButtonClick).toHaveBeenCalledWith({
      ...fakeInventoryItemWeapon,
      equipped: true,
    });
  });

  it('should invoke onItemPanelCloseButton when close button is clicked', () => {
    component.selectedInventoryItem
      ? (component.selectedInventoryItem.equipped = true)
      : null;
    fixture.detectChanges();
    const equipButton: HTMLElement = fixture.nativeElement.querySelector(
      '.inventory__itemPanel__itemActionMenu__action-close'
    );

    equipButton.click();
    expect(mockOnItemPanelCloseButtonClick).toHaveBeenCalled();
  });
});
