import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonsComponent } from "./components/pokemons/pokemons.component";
import { PokemonDetailsComponent } from "./components/pokemon-details/pokemon-details.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import {
  NativeScriptCommonModule,
  NativeScriptHttpClientModule,
} from "@nativescript/angular";
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [PokemonsComponent, PokemonDetailsComponent, PokemonCardComponent],

  imports: [
    CommonModule,
    NativeScriptCommonModule,
    PokemonRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptUIListViewModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PokemonModule {}
