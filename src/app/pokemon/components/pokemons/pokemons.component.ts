import { PokemonPaginatedResponse } from "./../../shared/interfaces/pokemonInterfaces";
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
  requesApi: PokemonPaginatedResponse | undefined;
  constructor(private pokemonsSerive: PokemonsService, private page: Page) {
    this.page.actionBarHidden = true;

    this.pokemonsSerive.newPokemonsPage.subscribe({
      next: (res) => (this.requesApi = res),
    });
  }
  ngOnInit(): void {
    console.log(this.requesApi);
  }
  onLoadMoreItemsRequested(args: LoadOnDemandListViewEventData) {
    const that = new WeakRef(this);
    const listView: RadListView = args.object;
    if (this.requesApi.results.length > 0) {
      setTimeout(function () {
        that.get().pokemonsSerive.snewPokemonApiPaginated =
          that.get().requesApi.next;
        listView.notifyLoadOnDemandFinished();
      }, 1500);
    } else {
      args.returnValue = false;
      listView.notifyLoadOnDemandFinished(true);
    }
  }
}
