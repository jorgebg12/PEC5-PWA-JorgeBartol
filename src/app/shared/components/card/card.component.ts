import { Component, Input } from '@angular/core';
import { Pokedex } from 'src/app/models/pokedex.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() pokedex_entry!: Pokedex;
}
