import { Component } from '@angular/core';
import { UserSessionService } from '../shared/utils/user-session.service';
import { Subscription } from 'rxjs';
import { User } from '../shared/models/user-response';
import { SearchComponent } from '../home/feature/search/search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
  ],
  providers: [UserSessionService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user!: User;
  isOpen = false;
  private _subscriptions = new Subscription();
  constructor(private userSession: UserSessionService) { }

  ngOnInit() {
    // this._subscriptions.add(
    //   this.userSession.getUserInfo().subscribe(data => {
    //     this.user = data;
    //   })
    // );
    this._subscriptions.add(
      this.userSession.getAccessTokenParam()
    )
  }
  toggleBurgerMenu(): void {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.userSession.logout();
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
