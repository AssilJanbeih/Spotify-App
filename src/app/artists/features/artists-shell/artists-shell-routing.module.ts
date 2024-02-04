import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsListingComponent } from '../artists-listing/artists-listing.component';
import { ArtistProfileComponent } from '../artist-profile/artist-profile.component';
const routes: Routes = [
  {
    path: '', component: ArtistsListingComponent,
  },
  {
    path: 'add-new',
    loadComponent: () => import('../new-artist/new-artist.component').then(m => m.NewArtistComponent),
  },
  {
    path: 'profile/:id',
    component: ArtistProfileComponent,
  },
  {
    path: ':keyword',
    component: ArtistsListingComponent,
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsShellRoutingModule {
}
