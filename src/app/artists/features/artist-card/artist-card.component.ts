import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistsItemResponse } from '../../models/artist-item';
import { NumberFormatPipe } from 'src/app/shared/pipes/number-format-pipe';
import { PopularityStarsComponent } from 'src/app/shared/ui/popularity-stars/popularity-stars.component';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [
    CommonModule,
    PopularityStarsComponent,
  ],
  providers: [NumberFormatPipe],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.scss'
})
export class ArtistCardComponent {
  @Input() artist!: ArtistsItemResponse;

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  // navigates to artist
  public navigate(artist: any): void {
    this.router.navigate(['/artists/profile', artist.id]);
  }

}
