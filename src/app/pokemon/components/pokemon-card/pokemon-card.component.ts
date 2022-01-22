import { SimplePokemon } from "./../../shared/interfaces/pokemonInterfaces";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ns-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"],
})
export class PokemonCardComponent implements OnInit {
  @Input("item") pokemon: SimplePokemon;
  pokebolaBlancA = "/assets/pokebola.png";
  constructor() {}

  ngOnInit(): void {}
}
