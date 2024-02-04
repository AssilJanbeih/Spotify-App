import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotify-web-app';
  constructor(private route: ActivatedRoute) { }

  checkRoute(): boolean {
    const currentRoute = this.route.snapshot.routeConfig;

    return currentRoute && currentRoute.path !== 'auth'? true : false;
  }
}
