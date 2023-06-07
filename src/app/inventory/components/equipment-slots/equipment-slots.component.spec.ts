import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSlotsComponent } from './equipment-slots.component';
import { provideMockStore } from '@ngrx/store/testing';
import {
  fakeInventoryItemArmor,
  fakeInventoryItemWeapon,
} from 'src/app/test/fakeState';

describe('EquipmentSlotsComponent', () => {
  let component: EquipmentSlotsComponent;
  let fixture: ComponentFixture<EquipmentSlotsComponent>;
  let mockOnEquipmentSlotClick: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentSlotsComponent],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(EquipmentSlotsComponent);
    component = fixture.componentInstance;
    component.equippedWeapon = fakeInventoryItemWeapon;
    component.equippedArmor = fakeInventoryItemWeapon;
    mockOnEquipmentSlotClick = jasmine.createSpy('onEquipmentSlotClick');
    component.onEquipmentSlotClick = mockOnEquipmentSlotClick;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onEquipmentSlotClick with equippedWeapon when click on weapon slot', () => {
    const weaponSlotElement = fixture.nativeElement.querySelector(
      '.equipmentSlots__slot-weapon'
    );
    weaponSlotElement.click();
    expect(mockOnEquipmentSlotClick).toHaveBeenCalledWith(
      fakeInventoryItemWeapon
    );
  });

  it('should invoke onEquipmentSlotClick with equippedArmor when click on armor slot', () => {
    const weaponSlotElement = fixture.nativeElement.querySelector(
      '.equipmentSlots__slot-armor'
    );
    weaponSlotElement.click();
    expect(mockOnEquipmentSlotClick).toHaveBeenCalledWith(
      fakeInventoryItemArmor
    );
  });

  it("should render 'Armor' text in the weapon slot if no weapon is equipped", () => {
    component.equippedArmor = null;
    fixture.detectChanges();
    const textElement = fixture.nativeElement.querySelector(
      '.equipmentSlots__slot-armorAlt'
    );
    console.log({ textElement });
    expect(textElement.textContent).toBe('Armor');
  });

  it("should render 'Weapon' text in the weapon slot if no weapon is equipped", () => {
    component.equippedWeapon = null;
    fixture.detectChanges();
    const textElement = fixture.nativeElement.querySelector(
      '.equipmentSlots__slot-weaponAlt'
    );
    expect(textElement.textContent).toBe('Weapon');
  });
});
