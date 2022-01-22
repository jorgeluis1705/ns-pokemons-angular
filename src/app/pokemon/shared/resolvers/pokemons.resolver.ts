import { PokemonPaginatedResponse } from "./../interfaces/pokemonInterfaces";
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
export class PokemonsResolver
  implements Resolve<Observable<PokemonPaginatedResponse>>
{
  constructor(private pokemonsSerive: PokemonsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PokemonPaginatedResponse> {
    return new Observable((obs) => {
      this.pokemonsSerive.loadPokemons().subscribe({
        next: (e) => obs.next(e),
        error: (err) => obs.error(err),
        complete: () => obs.complete(),
      });
    });
  }
}
