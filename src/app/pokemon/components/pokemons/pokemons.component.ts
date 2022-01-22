import {
  PokemonPaginatedResponse,
  SimplePokemon,
} from "./../../shared/interfaces/pokemonInterfaces";
import { PokemonsService } from "./../../shared/services/pokemons.service";
import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core";
import {
  LoadOnDemandListViewEventData,
  RadListView,
} from "nativescript-ui-listview";
@Component({
  selector: "ns-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.css"],
})
export class PokemonsComponent implements OnInit {
  pokemons: SimplePokemon[] = [];
  constructor(private pokemonsSerive: PokemonsService, private page: Page) {
    this.page.actionBarHidden = true;
  }
  ngOnInit(): void {
    console.log(this.pokemonsSerive.simplePokemonList);
  }
  onLoadMoreItemsRequested(args: LoadOnDemandListViewEventData) {
    const that = new WeakRef(this);
    const listView: RadListView = args.object;
    if (this.pokemonsSerive.setSimplePokemonList.length > 0) {
      setTimeout(function () {
        listView.notifyLoadOnDemandFinished();
      }, 1500);
    } else {
      args.returnValue = false;
      listView.notifyLoadOnDemandFinished(true);
    }
  }
}
