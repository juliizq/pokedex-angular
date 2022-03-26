import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit, OnDestroy {

  pokemon : Pokemon;

  subscription : Subscription; // /!\ important

  constructor(private pokemonService : PokemonService) {
   this.subscription = this.pokemonService.pokemonUrlSelectedSubject.subscribe((pokemonSelected)=>{
    this.pokemon = pokemonSelected;
    }); // /!\ important
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // /!\ important
  }
}
