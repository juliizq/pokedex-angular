import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonUrlSelectedSubject : Subject<Pokemon> = new Subject<Pokemon>();
  
  constructor( private httpClient : HttpClient ) { }
   
  url : string = environment.pokeApiBaseUrl;

  getPokemons(limit : number, offset : number){
    return this.httpClient.get(this.url + '?limit=' + limit + '&offset=' + offset);
   
  }

  getPokemon(urlDetail : string){
    return this.httpClient.get(urlDetail)
    .pipe(
      map((response)=>{
        const pokemon = new Pokemon();
        pokemon.fromJson(response);
        return pokemon
      })
    );
  }



}
