import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '@app-services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public publicCards = [
    { title: 'Dashboard', text: 'Übersicht', type: '/dashboard', bg: 'bg-primary text-white' },
  ];

  public authCards = [
    { title: 'Genre', text: 'Alle Genres im Musikladen', type: '/genres', bg: 'bg-primary text-white' },
    { title: 'Künstler', text: 'Eine Übersicht von bekannten Künstlern', type: '/artists', bg: 'bg-success text-white' },
    { title: 'Albums', text: 'Eine populäre Alben', type: '/albums', bg: 'bg-success text-white' },
    { title: 'Album mit Artist', text: 'Eine populäre Alben (Version 2)', type: '/albumartists', bg: 'bg-success text-white' },
  ];

  constructor(
    private authService: AuthService, 
    private router: Router) {

  }

  public get isLoginReqired(): boolean {
    return this.authService.isLoginRequired;
  }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public logout() {
    this.authService.logout();
  }
}
