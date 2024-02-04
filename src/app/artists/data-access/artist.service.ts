import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArtistsItemResponse } from '../models/artist-item';
import { ArtistTracksResponse } from 'src/app/shared/models/track/artist-tracks-response';
import { AlbumApiResponse, AlbumItemResponse } from 'src/app/shared/models/album/artist-album-response';
import { UserSessionService } from 'src/app/shared/utils/user-session.service';

@Injectable() // service provided in Artist module
export class ArtistService {
    //Artist Api
    private _baseUrl = `${environment.backendBaseUrl}/artists`;
    private header = new HttpHeaders({
        'Authorization': `Bearer ${this.userSession.getToken()}`,
      });

    constructor(private httpClient: HttpClient, private userSession: UserSessionService) { }

    // get artist info
    public getArtist(artistId: string): Observable<ArtistsItemResponse> {
        const artistUrl: string = `${this._baseUrl}/${artistId}`;
        return this.httpClient.get<ArtistsItemResponse>(artistUrl, {headers: this.header});
    }

    // get artist top tracks
    public getTopTracks(artistId: string): Observable<ArtistTracksResponse> {
        const artistUrl: string = `${this._baseUrl}/${artistId}/top-tracks?market=LB`;

        return this.httpClient.get<ArtistTracksResponse>(artistUrl, {headers: this.header});
    }

    // get artist album
    public getAlbums(artistId: string): Observable<AlbumApiResponse> {
        const albumUrl: string = `${this._baseUrl}/${artistId}/albums`;
        return this.httpClient.get<AlbumApiResponse>(albumUrl, {headers: this.header})
    }
}
