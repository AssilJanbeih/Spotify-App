import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ArtistsItemResponse } from '../../models/artist-item';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { ImageWithButtonModule } from 'src/app/shared/ui/image-with-button/image-with-button.module';
import { ArtistService } from '../../data-access/artist.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { AlbumItemResponse } from 'src/app/shared/models/album/artist-album-response';
import { ArtistTracksResponse } from 'src/app/shared/models/track/artist-tracks-response';
import { PopularityStarsComponent } from 'src/app/shared/ui/popularity-stars/popularity-stars.component';
import { AlbumCardComponent } from 'src/app/shared/ui/album-card/album-card.component';
import { TracksItemResponse } from 'src/app/shared/models/track/tracks-item-response';
import { TrackRowComponent } from 'src/app/shared/ui/track-row/track-row.component';

@Component({
  selector: 'app-artist-profile',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ImageWithButtonModule,
    PopularityStarsComponent,
    AlbumCardComponent,
    TrackRowComponent,
  ],
  providers: [ArtistService],
  templateUrl: './artist-profile.component.html',
  styleUrl: './artist-profile.component.scss'
})
export class ArtistProfileComponent implements OnInit, OnDestroy {
  private _subscription = new Subscription();
  artist!: ArtistsItemResponse;
  albums!: Array<AlbumItemResponse>;
  topTrack!: Array<TracksItemResponse>;
  artistId!: string;

  constructor(private artistService: ArtistService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.artistId = id;
      this.getArtistInfo(id);
      this.getAlbums(id);
      this.getTracks(id);
    }
  }

  getArtistInfo(id: string) {
    this.artistService.getArtist(id).subscribe(data => {
      this.artist = data;
    })
  }

  getAlbums(id: string) {
    this._subscription.add(
      this.artistService.getAlbums(id).subscribe(data => {
        this.albums = data.items;
      })
    );

  }

  getTracks(id: string) {
    this._subscription.add(
      this.artistService.getTopTracks(id).subscribe(data => {
        this.topTrack = data.tracks;
      })
    );

  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
