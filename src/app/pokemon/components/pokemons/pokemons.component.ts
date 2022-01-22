import { PokemonsService } from "./../../shared/services/pokemons.service";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "ns-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.css"],
})
export class PokemonsComponent implements OnInit {
  constructor(private pokemonsSerive: PokemonsService) {
    this.pokemonsSerive.newPokemonsPage.subscribe({
      next: (res) => console.log(res),
    });
  }
  ngOnInit(): void {}
}
