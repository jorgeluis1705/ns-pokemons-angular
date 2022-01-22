import { delay } from "rxjs";
import { SimplePokemon } from "./../../shared/interfaces/pokemonInterfaces";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import {
  Image,
  GestureEventData,
  Color,
  AbsoluteLayout,
} from "@nativescript/core";
import { Router } from "@angular/router";

@Component({
  selector: "ns-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"],
})
export class PokemonCardComponent implements OnInit {
  @Input("item") pokemon: SimplePokemon;
  pokebolaBlancA = "/assets/pokebola.png";
  @ViewChild("img") img: ElementRef<Image>;
  @ViewChild("ly") ly: ElementRef<AbsoluteLayout>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      let layout: AbsoluteLayout = this.ly.nativeElement;
      layout.backgroundColor = new Color("#f1be3f");
      console.log("SIU");
    }, 4000);
  }
  onTap() {
    let layout: AbsoluteLayout = this.ly.nativeElement;
    // Get reference to object we want to animate with code
    layout
      .animate({
        duration: 60,
        opacity: 0.5,
      })
      .then(() => {
        // Reset animation
        setTimeout(() => {
          layout.opacity = 1;
        }, 50);
      });
    this.router.navigate(["pokemons/", this.pokemon.id]);
  }
}
