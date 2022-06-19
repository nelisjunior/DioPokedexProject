import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  pokedex: any = [];

  /**
   *
   * @param pokeapiService
   */
  constructor(public pokeapiService: PokeapiService, public router: Router) {

    this.getPokedex();

  }

  getPokedex() {

    this.pokeapiService.getPokedex().then((data: any) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });

  }

  /**
   *
   */
  ngOnInit() {

  }

}
