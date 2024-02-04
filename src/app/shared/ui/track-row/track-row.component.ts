import { Component, Input } from '@angular/core';
import { TracksItemResponse } from '../../models/track/tracks-item-response';
import { PopularityStarsComponent } from '../popularity-stars/popularity-stars.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-row',
  standalone: true,
  imports: [
    CommonModule,
    PopularityStarsComponent,
  ],
  templateUrl: './track-row.component.html',
  styleUrl: './track-row.component.scss'
})
export class TrackRowComponent {
  @Input() tracks!: Array<TracksItemResponse>;

  convertDuration(trackDuration: number) {
    let seconds = Math.floor(trackDuration / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    minutes = seconds >= 30 ? minutes + 1 : minutes;
    minutes = minutes % 60;
    return `${minutes}:${seconds}`;
  }

}
