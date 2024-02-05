import { Component, Input } from '@angular/core';
import { ImageWithButtonModule } from 'src/app/shared/ui/image-with-button/image-with-button.module';
import { ArtistService } from '../../data-access/artist.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ArtistsSearchResponse } from 'src/app/shared/models/search/artist-search-response';
import { ArtistsItemResponse } from '../../models/artist-item';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from 'src/app/artists/features/artist-card/artist-card.component';
import { SearchService } from 'src/app/core/services/search.service';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-artists-listing',
  standalone: true,
  imports: [
    CommonModule,
    ImageWithButtonModule,
    ArtistCardComponent,
    HeaderComponent,
  ],
  providers: [ArtistService, SearchService],
  templateUrl: './artists-listing.component.html',
  styleUrl: './artists-listing.component.scss'
})
export class ArtistsListingComponent {

  noResultFound = true;
  isSearching = false;
  artistsResult: ArtistsSearchResponse[] = [];
  artistItems: ArtistsItemResponse[] = [];

  constructor(private artistService: ArtistService,
    private route: ActivatedRoute,
    private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const search = params['keyword'];
      if (search) {
        this.isSearching = true;
        this.listArtists();
      }
    });
    
  }

  listArtists() {
    this.isSearching = this.route.snapshot.paramMap.has('keyword')!;
    if (this.isSearching) {
      this.handleArtistSearch();
    }
    else {
      this.handleArtistSearch();
    }
  }

  handleArtistSearch() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword')!
    this.searchService.getSearchForArtists(keyword).subscribe((data: any) => {
      this.artistsList = data.artists.items;


      if (this.artistsList.length === 0) {
        this.noResultFound = true;
      }
      else {
        this.noResultFound = false;
      }

    }, (err) => {
      console.error(err.message);
    }, () => {
    });
  }

  public artistsList: any[] = [];
  public moreArtists: boolean = false;
  public activeLanguage: string = 'en';
}
