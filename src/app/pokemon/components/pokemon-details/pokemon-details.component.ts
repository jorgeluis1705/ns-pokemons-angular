import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { PokemonFull } from "../../shared/interfaces/pokemonInterfaces";
import { Page } from "@nativescript/core";

@Component({
  selector: "ns-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.css"],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonFull: PokemonFull | undefined;
  constructor(private ac: ActivatedRoute, private page: Page) {
    this.page.actionBarHidden = true;

    this.pokemonFull = this.ac.snapshot.data.pokemon;
  }

  ngOnInit(): void {}
}
