import { delay } from "rxjs";
import { SimplePokemon } from "./../../shared/interfaces/pokemonInterfaces";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import {
  Image,
  GestureEventData,
  Color,
  AbsoluteLayout,
} from "@nativescript/core";

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

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      let view: Image = this.img.nativeElement;
      let layout: AbsoluteLayout = this.ly.nativeElement;
      console.log(view.color);
      console.log(view.tintColor);
      layout.backgroundColor = new Color("#f1be3f");
      console.log("SIU");
    }, 4000);
  }
}
