import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathTokenComponent } from './board/path-token/path-token.component';
import { WallTokenComponent } from './board/wall-token/wall-token.component';
import { WarriorTokenComponent } from './character/warrior-token/warrior-token.component';
import { RogueTokenComponent } from './character/rogue-token/rogue-token.component';
import { PortalTokenComponent } from './board/portal-token/portal-token.component';
import { EntryTokenComponent } from './board/entry-token/entry-token.component';
import { GolblinTokenComponent } from './board/golblin-token/golblin-token.component';
import { TreasureTokenComponent } from './board/treasure-token/treasure-token.component';
import { PlainSwordTokenComponent } from './inventory/plain-sword-token/plain-sword-token.component';
import { HealthPotionTokenComponent } from './inventory/health-potion-token/health-potion-token.component';
import { PlainDaggerTokenComponent } from './inventory/plain-dagger-token/plain-dagger-token.component';
import { RoundShieldTokenComponent } from './inventory/round-shield-token/round-shield-token.component';
import { BroadSwordTokenComponent } from './inventory/broad-sword-token/broad-sword-token.component';
import { VikingShieldTokenComponent } from './inventory/viking-shield-token/viking-shield-token.component';
import { BowieKnfieTokenComponent } from './inventory/bowie-knfie-token/bowie-knfie-token.component';
import { FogTokenComponent } from './board/fog-token/fog-token.component';

@NgModule({
  declarations: [
    PathTokenComponent,
    WallTokenComponent,
    WarriorTokenComponent,
    RogueTokenComponent,
    PortalTokenComponent,
    EntryTokenComponent,
    GolblinTokenComponent,
    TreasureTokenComponent,
    HealthPotionTokenComponent,
    PlainSwordTokenComponent,
    PlainDaggerTokenComponent,
    RoundShieldTokenComponent,
    BroadSwordTokenComponent,
    VikingShieldTokenComponent,
    BowieKnfieTokenComponent,
    FogTokenComponent,
  ],
  imports: [CommonModule],
  exports: [
    PathTokenComponent,
    WallTokenComponent,
    WarriorTokenComponent,
    RogueTokenComponent,
    PortalTokenComponent,
    EntryTokenComponent,
    GolblinTokenComponent,
    TreasureTokenComponent,
    HealthPotionTokenComponent,
    PlainSwordTokenComponent,
    PlainDaggerTokenComponent,
    RoundShieldTokenComponent,
    BroadSwordTokenComponent,
    VikingShieldTokenComponent,
    BowieKnfieTokenComponent,
    FogTokenComponent,
  ],
})
export class TokenModule {}
