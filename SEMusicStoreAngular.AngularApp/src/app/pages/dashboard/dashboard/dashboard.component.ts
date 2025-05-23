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
  public cards = [
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

  public logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
