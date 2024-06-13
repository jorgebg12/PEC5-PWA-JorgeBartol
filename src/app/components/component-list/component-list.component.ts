import { Component, OnInit } from '@angular/core';
import { Pokedex } from 'src/app/models/pokedex.interface';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
})
export class ComponentListComponent implements OnInit {
  pokedexList!: Pokedex[];
  loading: boolean = true;

  tableDisplay: boolean = true;
  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameService.getPokemonList().subscribe((pokedex) => {
      this.pokedexList = pokedex;
      console.log(this.pokedexList);
    });

    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  changeToTable(): void {
    this.tableDisplay = true;
  }
  changeToCards(): void {
    this.tableDisplay = false;
  }
}
