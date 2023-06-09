import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monster-displayer',
  templateUrl: './monster-displayer.component.html',
  styleUrls: ['./monster-displayer.component.scss'],
})
export class MonsterDisplayerComponent {
  @Input() monsterName!: string;
}
