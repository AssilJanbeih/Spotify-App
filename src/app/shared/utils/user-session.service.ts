import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HOME_ROUTE } from "src/app/core/constants/routes";
import { User } from "../models/user-response";
import { environment } from "src/enviroment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  private _baseUrl = `${environment.backendBaseUrl}/me`;
  accessToken!: string;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  public isAuthentic() {
    if (this.accessToken) {
      // Access Token available, save it to local storage to use it in our search

      localStorage.setItem('access_token', this.accessToken);
      this.router.navigate([HOME_ROUTE]);
    } else {
      //Access token not granted
      console.error('Authentication failed');
    }
  }

  public getAccessTokenParam() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const params = new URLSearchParams(fragment);
        const accessToken = params.get('access_token');
        if (accessToken) {
          console.log(accessToken);
          this.accessToken = accessToken;
          this.isAuthentic();
        }
      }
    }
    );
  }

  public getToken() {
    return localStorage.getItem('access_token');
  }

  public getUserInfo(): Observable<User> {
    const userUrl: string = `${this._baseUrl}&access_token=${this.getToken()}`;
    return this.http.get<User>(userUrl);
  }


  public logout() {
    localStorage.removeItem('access_token');
    console.log('token removed');
    this.router.navigate(['auth']);
  }

}
