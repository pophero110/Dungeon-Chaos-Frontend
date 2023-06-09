import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathTokenComponent } from './board/path-token/path-token.component';
import { WallTokenComponent } from './board/wall-token/wall-token.component';
import { WarriorTokenComponent } from './character/warrior-token/warrior-token.component';
import { RogueTokenComponent } from './character/rogue-token/rogue-token.component';
import { PortalTokenComponent } from './board/portal-token/portal-token.component';
import { EntryTokenComponent } from './board/entry-token/entry-token.component';
import { GolblinTokenComponent } from './monster/golblin-token/golblin-token.component';
import { TreasureTokenComponent } from './board/treasure-token/treasure-token.component';
import { PlainSwordTokenComponent } from './inventory/plain-sword-token/plain-sword-token.component';
import { HealthPotionTokenComponent } from './inventory/health-potion-token/health-potion-token.component';
import { PlainDaggerTokenComponent } from './inventory/plain-dagger-token/plain-dagger-token.component';
import { RoundShieldTokenComponent } from './inventory/round-shield-token/round-shield-token.component';
import { BroadSwordTokenComponent } from './inventory/broad-sword-token/broad-sword-token.component';
import { VikingShieldTokenComponent } from './inventory/viking-shield-token/viking-shield-token.component';
import { BowieKnfieTokenComponent } from './inventory/bowie-knfie-token/bowie-knfie-token.component';
import { FogTokenComponent } from './board/fog-token/fog-token.component';
import { UncertaintyTokenComponent } from './shared/uncertainty-token.component';
import { ZombieComponent } from './monster/zombie/zombie.component';
import { CrossShieldComponent } from './inventory/cross-shield/cross-shield.component';
import { TrollComponent } from './monster/troll/troll.component';
import { DragonComponent } from './monster/dragon/dragon.component';
import { RelicBladeComponent } from './inventory/relic-blade/relic-blade.component';
import { TokenDisplayerComponent } from './token-displayer/token-displayer.component';
import { MonsterComponent } from './monster/monster/monster.component';
import { MonsterDisplayerComponent } from './monster-displayer/monster-displayer.component';
import { BadGnomeComponent } from './monster/bad-gnome/bad-gnome.component';

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
    UncertaintyTokenComponent,
    ZombieComponent,
    BadGnomeComponent,
    CrossShieldComponent,
    TrollComponent,
    DragonComponent,
    RelicBladeComponent,
    TokenDisplayerComponent,
    MonsterComponent,
    MonsterDisplayerComponent,
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
    UncertaintyTokenComponent,
    ZombieComponent,
    CrossShieldComponent,
    TrollComponent,
    DragonComponent,
    RelicBladeComponent,
    TokenDisplayerComponent,
    MonsterComponent,
    MonsterDisplayerComponent,
    BadGnomeComponent,
  ],
})
export class TokenModule {}
