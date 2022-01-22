import { PokemonFull } from "./../interfaces/pokemonInterfaces";
import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { PokemonsService } from "../services/pokemons.service";

@Injectable({
  providedIn: "root",
})
export class PokemonDetailsResolver
  implements Resolve<Observable<PokemonFull>>
{
  constructor(private pokemonsSerive: PokemonsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PokemonFull> {
    return new Observable((obs) => {
      this.pokemonsSerive.getOnePokemon(route.params.id).subscribe({
        next: (e) => {
          obs.next(e);
        },
        error: (err) => obs.error(err),
        complete: () => obs.complete(),
      });
    });
  }
}
