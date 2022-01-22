import { PokemonPaginatedResponse } from "../interfaces/pokemonInterfaces";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PokemonsService {
  pokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=40";

  constructor(private http: HttpClient) {}

  get newPokemonsPage(): Observable<PokemonPaginatedResponse> {
    return this.http.get<PokemonPaginatedResponse>(this.pokemonApi).pipe();
  }
}
