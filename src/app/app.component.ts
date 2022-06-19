import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pokedex', url: '/pokedex', icon: 'list' },
    { title: 'Pokedex2', url: '/pokedex2', icon: 'list' }
  ];
  public labels = ['Aquático', 'Elétrico', 'Fogo', 'Pedra', 'Planta', 'Terra'];
  constructor() {}
}
