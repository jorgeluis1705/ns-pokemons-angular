import { Result, SimplePokemon } from "./../interfaces/pokemonInterfaces";
import { PokemonPaginatedResponse } from "../interfaces/pokemonInterfaces";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PokemonsService {
  pokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=40";
  set pokemonApiUrl(url: string) {
    this.pokemonApi = url;
  }
  simplePokemonList: SimplePokemon[] = [];
  set setSimplePokemonList(pokemons: SimplePokemon[]) {
    this.simplePokemonList = pokemons;
  }
  loading: boolean = false;
  set setIsLoading(val: boolean) {
    this.loading = val;
  }

  constructor(private http: HttpClient) {}
  getPokemonsRequest(url: string): Observable<PokemonPaginatedResponse> {
    return this.http.get<PokemonPaginatedResponse>(url).pipe(
      map((response) => {
        const newPokemonList: SimplePokemon[] = response.results.map(
          ({ name, url }) => {
            const urlParts = url.split("/");
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return { id, picture, name };
          }
        );
        this.pokemonApiUrl = response.next;

        return {
          ...response,
          results: newPokemonList as any[],
        };
      })
    );
  }
  loadPokemons(): Observable<PokemonPaginatedResponse> {
    this.setIsLoading = true;
    return this.getPokemonsRequest(this.pokemonApi).pipe(
      map((res) => {
        this.setSimplePokemonList = [
          ...this.simplePokemonList,
          ...(res.results as any[]),
        ];
        this.setIsLoading = false;
        return res;
      })
    );
  }
}
