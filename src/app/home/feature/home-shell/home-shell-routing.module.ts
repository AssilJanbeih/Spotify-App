import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home-dashboard/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'artists', loadChildren: () => import('./../../../artists/features/artists-shell/artists-shell.module').then(
      (m) => m.ArtistsShellModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeShellRoutingModule {
}
