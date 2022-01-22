import { PokemonsResolver } from "./shared/resolvers/pokemons.resolver";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { PokemonsComponent } from "./components/pokemons/pokemons.component";

const routes: Routes = [
  {
    path: "",
    component: PokemonsComponent,
    resolve: {
      pokemons: PokemonsResolver,
    },
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class PokemonRoutingModule {}
