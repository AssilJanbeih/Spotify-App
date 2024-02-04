import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/environment';
import { HOME_ROUTE } from 'src/app/core/constants/routes';
import { Router } from '@angular/router';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthDataService {
  //AUth Api
  private _baseUrl = `${environment.backendAccountUrl}/authorize`;
  //Client ID on Spotify
  private client_id = '011e041795a94df5a68a82d799c85d22';
  //Redirect URI Same as the one set in spotify
  private redirect_uri = 'http://localhost:4200/' + HOME_ROUTE;
  //Scope as per documentation
  private scope: string = 'user-read-private user-read-email';
  state: string = generateRandomString(16);

  private queryParams: string = [
    'response_type=token',
    'client_id=' + encodeURIComponent(this.client_id),
    'scope=' + encodeURIComponent(this.scope),
    'redirect_uri=' + encodeURIComponent(this.redirect_uri),
    'state=' + encodeURIComponent(this.state)
  ].join('&');

  constructor(private router: Router) { }

  authenticate() {
    window.location.href = `${this._baseUrl}?${this.queryParams}`;
  }
}


function generateRandomString(numberChar: number): string {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for (var i = 0; i < numberChar; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

