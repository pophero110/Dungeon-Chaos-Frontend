import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-token-displayer',
  templateUrl: './token-displayer.component.html',
  styleUrls: ['./token-displayer.component.scss'],
})
export class TokenDisplayerComponent {
  @Input() itemId!: number;
}
