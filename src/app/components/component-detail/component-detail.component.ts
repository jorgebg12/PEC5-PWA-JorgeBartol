import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent implements OnInit {
  pokemon!: Pokemon;
  panelOpenState: boolean = false;
  loading: boolean = true;

  constructor(
    private gameService: GamesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier: string | null =
      this.activatedRoute.snapshot.paramMap.get('id');

    this.gameService.getPokemonData(identifier).subscribe((pokemon) => {
      if (!pokemon) {
        this.router.navigateByUrl('/');
      }
      this.pokemon = pokemon;
      console.log(pokemon);
    });

    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  totalStats(): string {
    const total = this.pokemon.stats.reduce((accumulator, currentStat) => {
      return accumulator + currentStat.base_stat;
    }, 0);
    return total.toString();
  }

  goHomePage(): void {
    this.router.navigateByUrl('/');
  }
}
