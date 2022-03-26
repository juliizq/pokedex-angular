import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { async, map, Observable, observable } from 'rxjs';




@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemons : Pokemon[] = [];

  limit: number = 6;
  page : number = 0;
  offset: number = 0;

  pokemonCount: number;

  isLoading : boolean = false;

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {

    this.getPokemons(0);
  }

  getPokemons(offset: number){
    this.isLoading = true;
    this.pokemonService.getPokemons(this.limit, offset)
    .subscribe(async(reponse : any ) => {
      const mappedPokemons : Pokemon[] = [];
      this.pokemonCount = reponse['count'];
      for(let result of reponse['results']){
        this.pokemonService.getPokemon(result['url']).subscribe((pokemon : Pokemon) => {
          mappedPokemons.push(pokemon)
        })
      }
      this.pokemons = mappedPokemons;
      this.isLoading = false;
    })
  }

  onClickDetail(pokemon : any){
    this.pokemonService.pokemonUrlSelectedSubject.next(pokemon);
  }

  nextPokemons(){
    this.page ++;
    const offset = this.page * this.limit;
    this.getPokemons(offset);
  }

  previousPokemons(){
    this.page --;
    const offset = this.page * this.limit;
    this.getPokemons(offset);
  }


  getLimitNext(){
    return Math.floor(this.pokemonCount / this.limit);
  }

} 