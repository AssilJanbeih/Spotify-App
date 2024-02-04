import { Component } from '@angular/core';
import { NewArtistComponent } from 'src/app/artists/features/new-artist/new-artist.component';
import { LoginComponent } from 'src/app/auth/feature/login/login.component';
import { ImageWithButtonModule } from 'src/app/shared/ui/image-with-button/image-with-button.module';
import { UserSessionService } from 'src/app/shared/utils/user-session.service';
import { SearchComponent } from '../search/search.component';
import { User } from 'src/app/shared/models/user-response';
import { Subscription } from 'rxjs';
import { HeaderComponent } from 'src/app/header/header.component';
import { ArtistsListingComponent } from 'src/app/artists/features/artists-listing/artists-listing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NewArtistComponent,
    HeaderComponent,
    ArtistsListingComponent,
  ],
  providers: [UserSessionService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
