import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokedex } from '../models/pokedex.interface';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokedex[]> {
    return this.http
      .get<any>('https://pokeapi.co/api/v2/pokedex/2')
      .pipe(map((response) => response.pokemon_entries));
  }

  getPokemonData(id: string | null): Observable<Pokemon> {
    return this.http
      .get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + id)
      .pipe(
        map((response) => {
          const pokemon: Pokemon = {
            id: response.id,
            name: response.name,
            order: response.order,
            sprites: response.sprites,
            stats: response.stats,
            types: response.types,
          };
          return pokemon;
        })
      );
  }
}
