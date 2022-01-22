import { PokemonDetailsResolver } from "./shared/resolvers/pokemon-details.resolver";
import { PokemonsResolver } from "./shared/resolvers/pokemons.resolver";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { PokemonsComponent } from "./components/pokemons/pokemons.component";
import { PokemonDetailsComponent } from "./components/pokemon-details/pokemon-details.component";

const routes: Routes = [
  {
    path: "",
    component: PokemonsComponent,
    resolve: {
      pokemons: PokemonsResolver,
    },
    children: [
      {
        path: ":id",
        component: PokemonDetailsComponent,
        resolve: {
          pokemon: PokemonDetailsResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class PokemonRoutingModule {}
