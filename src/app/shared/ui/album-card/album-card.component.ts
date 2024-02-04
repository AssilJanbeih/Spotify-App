import { Component, Input } from '@angular/core';
import { AlbumItemResponse } from '../../models/album/artist-album-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss'
})
export class AlbumCardComponent {
  @Input() album!: AlbumItemResponse;

}
