import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserSessionService } from "src/app/shared/utils/user-session.service";
import { LOGIN_ROUTE } from "../constants/routes";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userSessionService: UserSessionService, private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthentic = this.userSessionService.accessToken;
    if (!isAuthentic) {
      this.router.navigateByUrl(LOGIN_ROUTE);
    }
    return false;
  }

}
