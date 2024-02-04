import { HttpClient } from '@angular/common/http';
import { SafeKeyedRead } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APISearchResponse } from 'src/app/shared/models/search/search';
import { UserSessionService } from 'src/app/shared/utils/user-session.service';

import { environment } from 'src/enviroment/environment';

@Injectable() // service provided in module
export class SearchService {
    //Search Api
    private _baseUrl = `${environment.backendBaseUrl}/search`;
    private token = this.userSession.getToken();

    constructor(private http: HttpClient,private userSession : UserSessionService) { }

    // get both tracks and artist from spotify
    public getSearchForArtists(term: string): Observable<Array<APISearchResponse>> {
        const searchUrl: string = `${this._baseUrl}?q=${term}&type=artist&access_token=${this.token}`;
        return this.http.get<Array<APISearchResponse>>(searchUrl);
    }
}
