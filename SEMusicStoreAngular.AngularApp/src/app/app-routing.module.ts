import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { GenreListComponent } from './pages/genres/genre-list/genre-list.component';
import { ArtistListComponent } from './pages/artists/artist-list/artist-list.component';
import { AlbumListComponent } from './pages/albums/album-list/album-list.component';
import { AlbumArtistListComponent } from './pages/albumartists/album-artist-list/album-artist-list.component';

const routes: Routes = [
  // Öffentlicher Login-Bereich
  { path: 'auth/login', component: LoginComponent },
  { path: 'genres', component: GenreListComponent },
  { path: 'artists', component: ArtistListComponent },
  { path: 'albums', component: AlbumListComponent },
  { path: 'albumartists', component: AlbumArtistListComponent },

  // Geschützter Bereich mit Dashboard und Unterseiten
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  // Redirect von leerem Pfad auf Dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Fallback bei ungültiger URL
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
