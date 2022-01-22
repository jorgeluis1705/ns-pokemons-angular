import { PokemonsService } from "./../../shared/services/pokemons.service";
import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core";
@Component({
  selector: "ns-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.css"],
})
export class PokemonsComponent implements OnInit {
  constructor(private pokemonsSerive: PokemonsService, private page: Page) {
    this.page.actionBarHidden = true;

    this.pokemonsSerive.newPokemonsPage.subscribe({
      next: (res) => console.log(res),
    });
  }
  ngOnInit(): void {}
}
