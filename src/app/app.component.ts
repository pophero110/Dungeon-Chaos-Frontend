import { Component } from '@angular/core';
import { environment } from './../environments/environment';
//TODO: double check on reference data type on store, avoid pass reference data type directly
// use spread operator
//TODO: check unnecessary export
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    console.log(environment.production); // Logs false for development environment
  }
}
