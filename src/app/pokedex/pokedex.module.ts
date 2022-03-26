import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeHomeComponent } from './poke-home/poke-home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PokemonService } from './services/pokemon.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    PokeDetailComponent,
    PokeListComponent,
    PokeHomeComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers : [
    PokemonService
  ]
})
export class PokedexModule { }
