import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/feature/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '', loadChildren: () => import('./home/feature/home-shell/home-shell.module').then(m => m.HomeShellModule) },
  { path: 'auth', component: LoginComponent, },
  { path: '404-not-found', loadChildren: () => import('./shared/ui/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/404-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
