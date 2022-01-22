import { Result, SimplePokemon } from "./../interfaces/pokemonInterfaces";
import { PokemonPaginatedResponse } from "../interfaces/pokemonInterfaces";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PokemonsService {
  pokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=40";

  simplePokemonList: SimplePokemon[] = [];
  set setSimplePokemonList(pokemons: SimplePokemon[]) {}
  loading: boolean = false;
  set setIsLoading(val: boolean) {
    this.loading = val;
  }

  constructor(private http: HttpClient) {}

  set snewPokemonApiPaginated(url: string) {
    this.pokemonApi = url;
  }
  loadPokemons = async () => {
    this.setIsLoading = true;
  };
  mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split("/");
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return { id, picture, name };
    });

    this.setSimplePokemonList = [...this.simplePokemonList, ...newPokemonList];
    this.setIsLoading = false;
  };
}
