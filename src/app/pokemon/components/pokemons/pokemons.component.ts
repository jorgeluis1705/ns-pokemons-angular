import { ActivatedRoute } from "@angular/router";
import { SimplePokemon } from "./../../shared/interfaces/pokemonInterfaces";
import { PokemonsService } from "./../../shared/services/pokemons.service";
import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core";
import {
  LoadOnDemandListViewEventData,
  RadListView,
} from "nativescript-ui-listview";
import { delay } from "rxjs";
@Component({
  selector: "ns-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.css"],
})
export class PokemonsComponent implements OnInit {
  pokemons: SimplePokemon[] | undefined;
  constructor(
    private page: Page,
    private ac: ActivatedRoute,
    private pokemonsSerive: PokemonsService
  ) {
    this.page.actionBarHidden = true;
    this.pokemons = this.ac.snapshot.data.pokemons.results;
  }
  ngOnInit(): void {
    console.log(this.pokemons);
  }
  onLoadMoreItemsRequested(args: LoadOnDemandListViewEventData) {
    const that = new WeakRef(this);
    const listView: RadListView = args.object;
    if (that.get().pokemons.length > 0) {
      that
        .get()
        .pokemonsSerive.getPokemonsRequest(that.get().pokemonsSerive.pokemonApi)
        .pipe(delay(2000))
        .subscribe({
          next: (nextRes) => {
            that.get().pokemons = that
              .get()
              .pokemons.concat(nextRes.results as any);
            listView.notifyLoadOnDemandFinished();
          },
        });
    } else {
      args.returnValue = false;
      listView.notifyLoadOnDemandFinished(true);
    }
  }
}
