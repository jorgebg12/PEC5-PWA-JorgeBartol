import { Component, Input } from '@angular/core';
import { Pokedex } from 'src/app/models/pokedex.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() pokedex!: Pokedex[];
  displayedColumns: string[] = ['number', 'name', 'page-detail'];
}
