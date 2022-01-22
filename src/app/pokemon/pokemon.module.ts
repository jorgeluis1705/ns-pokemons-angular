import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonsComponent } from "./components/pokemons/pokemons.component";
import { PokemonDetailsComponent } from "./components/pokemon-details/pokemon-details.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [PokemonsComponent, PokemonDetailsComponent],
  imports: [CommonModule, PokemonRoutingModule, HttpClientModule],
})
export class PokemonModule {}
